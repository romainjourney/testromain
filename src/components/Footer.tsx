export default function Footer(){
  return (
    <footer className="border-t bg-white mt-10">
      <div className="container py-10 grid md:grid-cols-3 gap-8 text-sm">
        <div>
          <div className="font-semibold">Aussitôt Bon</div>
          <p className="text-[var(--muted)] mt-2">Repas de chef prêts en quelques minutes. Sous-vide, bon et régulier.</p>
        </div>
        <div>
          <div className="font-semibold">Infos</div>
          <ul className="mt-2 space-y-1 text-[var(--muted)]">
            <li>Mentions légales</li>
            <li>CGV</li>
            <li>Confidentialité</li>
          </ul>
        </div>
        <div>
          <div className="font-semibold">Contact</div>
          <div className="mt-2 text-[var(--muted)]">support@aussitotbon.fr</div>
        </div>
      </div>
      <div className="text-center text-xs text-[var(--muted)] pb-6">© {new Date().getFullYear()} Aussitôt Bon — Tous droits réservés.</div>
    </footer>
  );
}
