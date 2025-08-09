"use client";
import Link from "next/link";
import Button from "./Button";
export default function Navbar(){
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/70 border-b">
      <div className="container flex items-center justify-between h-16">
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=200" alt="Aussitôt Bon" className="h-7 w-7 rounded-full object-cover"/>
          <span>Aussitôt Bon</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="/#benefits" className="hover:text-[var(--brand)]">Pourquoi nous</a>
          <Link href="/#promo" className="hover:text-[var(--brand)]">Offre</Link>
          <Link href="/menu" className="hover:text-[var(--brand)]">Menu</Link>
        </nav>
        <div className="flex items-center gap-2">
          <Button variant="ghost" className="hidden sm:inline-flex">Se connecter</Button>
          <Link href="/menu"><Button>Commander</Button></Link>
        </div>
      </div>
    </header>
  );
}
