"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Button from "@/components/Button";
import { useState } from "react";
import Link from "next/link";
import { getAppliedTier } from "@/data/promos";

const mockMeals = Array.from({length:12}).map((_,i)=> ({ id:i+1, name:`Plat ${i+1}`, kcal: 520 + i*7 }));

export default function MenuPage(){
  const [cart, setCart] = useState<number[]>([]);
  const [visibleCode, setVisibleCode] = useState("RENTREE85");
  const applied = getAppliedTier(visibleCode, cart.length || 4);

  function toggle(id:number){
    setCart(prev => prev.includes(id) ? prev.filter(x=>x!==id) : [...prev, id]);
  }

  return (
    <div>
      <Navbar />
      <section className="container py-10">
        <div className="flex items-center justify-between gap-4 flex-wrap">
          <h1 className="text-2xl font-bold">Menu</h1>
          <div className="flex items-center gap-2">
            <input value={visibleCode} onChange={e=>setVisibleCode(e.target.value)} placeholder="Code promo" className="border rounded-xl px-3 py-2 text-sm"/>
            <div className="text-sm text-[var(--muted)]">{applied ? `${applied.tier.appliedCode} (${applied.matrix.key})` : "—"}</div>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 mt-6">
          {mockMeals.map(m => (
            <div key={m.id} className="border rounded-2xl bg-white p-4">
              <div className="font-semibold">{m.name}</div>
              <div className="text-xs text-[var(--muted)]">{m.kcal} kcal</div>
              <Button className="mt-3 w-full" onClick={()=>toggle(m.id)}>
                {cart.includes(m.id) ? "Retirer" : "Ajouter"}
              </Button>
            </div>
          ))}
        </div>

        <div className="sticky bottom-4 mt-8 bg-white border rounded-2xl p-4 shadow flex items-center justify-between">
          <div className="text-sm">Panier: <b>{cart.length}</b> plats</div>
          <div className="text-sm text-[var(--muted)]">
            {applied ? `Code appliqué: ${applied.tier.appliedCode} • Total remise 4 box: ${applied.tier.total}€` : "Aucune remise"}
          </div>
          <Link href="/panier"><Button>Voir le panier</Button></Link>
        </div>
      </section>
      <Footer />
    </div>
  );
}
