"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Button from "@/components/Button";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { PROMO85 } from "@/data/promos";

export default function Page(){
  return (
    <div>
      <Navbar />
      <Hero />
      <Benefits />
      <PromoHook />
      <HowItWorks />
      <Footer />
    </div>
  );
}

function Hero(){
  return (
    <section className="bg-white">
      <div className="container grid md:grid-cols-2 gap-8 py-16 md:py-20 items-center">
        <motion.div initial={{opacity:0, y:10}} animate={{opacity:1, y:0}} transition={{duration:0.5}}>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Des repas de chef, prêts en <span className="text-[var(--brand)]">3 minutes</span>
          </h1>
          <p className="text-lg text-[var(--muted)] mt-4">
            Cuisine sous-vide, ingrédients choisis, portions maîtrisées. Vous chauffez, vous savourez — on s’occupe du reste.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <Link href="/menu"><Button size="lg">Découvrir le menu</Button></Link>
            <span className="text-sm text-[var(--muted)]">Sans engagement • Livraison fraîche partout</span>
          </div>
        </motion.div>
        <motion.div initial={{opacity:0, y:10}} animate={{opacity:1, y:0}} transition={{duration:0.6, delay:0.1}}>
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
            <Image src="https://images.unsplash.com/photo-1512058564366-18510be2db19?q=80&w=1600" alt="Plat Aussitôt Bon" fill style={{objectFit:"cover"}}/>
            <div className="absolute bottom-3 left-3 bg-white/90 px-3 py-2 rounded-xl text-sm shadow">
              <span className="font-semibold text-[var(--brand)]">Sous-vide</span> • goût et texture préservés
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Benefits(){
  const items = [
    {title:"Goût constant",desc:"Cuisson sous-vide basse température inspirée de la restauration gastronomique."},
    {title:"Nutrition maîtrisée",desc:"Macros équilibrées, pas d’additifs inutiles."},
    {title:"Zéro prise de tête",desc:"Vous chauffez, c’est prêt. Idéal semaine chargée."},
  ];
  return (
    <section id="benefits" className="py-14">
      <div className="container grid md:grid-cols-3 gap-6">
        {items.map((it,i)=> (
          <div key={i} className="rounded-2xl border bg-white p-5">
            <div className="text-lg font-semibold">{it.title}</div>
            <div className="text-[var(--muted)] mt-2">{it.desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function PromoHook(){
  const tiers = PROMO85.tiers.filter(t => [4,6,8].includes(t.meals));
  return (
    <section id="promo" className="py-16 bg-[var(--card)]">
      <div className="container">
        <div className="flex items-end justify-between gap-4 flex-wrap">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold">Offre <span className="text-[var(--brand)]">RENTREE85</span></h2>
            <p className="text-[var(--muted)] mt-2">Réduction répartie sur vos 4 premières box. Le montant s’adapte au nombre de plats.</p>
          </div>
          <Link href="/menu"><Button>Commencer</Button></Link>
        </div>
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          {tiers.map((t,i)=> (
            <div key={i} className="rounded-2xl border-2 bg-white p-5">
              <div className="text-2xl font-extrabold">{t.meals} plats</div>
              <ul className="text-sm mt-3 space-y-2">
                <li className="flex justify-between"><span>Box 1</span><b>-{t.discounts[0]}€</b></li>
                <li className="flex justify-between"><span>Box 2</span><b>-{t.discounts[1]}€</b></li>
                <li className="flex justify-between"><span>Box 3</span><b>-{t.discounts[2]}€</b></li>
                <li className="flex justify-between"><span>Box 4</span><b>-{t.discounts[3]}€</b></li>
              </ul>
              <div className="mt-4 p-3 rounded-xl bg-gray-50 text-sm">
                Total remise <b>{t.total}€</b>
                <div className="text-xs text-[var(--muted)]">Code appliqué: {t.appliedCode}</div>
              </div>
              <Link href="/menu"><Button className="mt-4 w-full">Utiliser l’offre</Button></Link>
            </div>
          ))}
        </div>
        <p className="text-xs text-[var(--muted)] mt-4">*Un seul code à la fois (paramétrable).</p>
      </div>
    </section>
  );
}

function HowItWorks(){
  const steps = [
    {title:"Choisissez vos plats",desc:"Une carte qui change régulièrement.",img:"https://images.unsplash.com/photo-1526318472351-c75fcf070305?q=80&w=1200"},
    {title:"Recevez au frais",desc:"Livraison réfrigérée partout en France.",img:"https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1200"},
    {title:"Chauffez 3 minutes",desc:"Micro-ondes ou bain-marie. C’est prêt.",img:"https://images.unsplash.com/photo-1526318472351-c75fcf070305?q=80&w=1200"},
  ];
  return (
    <section id="how" className="py-16">
      <div className="container">
        <h3 className="text-2xl md:text-3xl font-bold mb-6">Comment ça marche</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {steps.map((s,i)=> (
            <div key={i} className="rounded-2xl overflow-hidden shadow bg-white">
              <img src={s.img} alt="step" className="h-40 w-full object-cover"/>
              <div className="p-4">
                <div className="font-semibold">{i+1}. {s.title}</div>
                <div className="text-sm text-[var(--muted)]">{s.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
