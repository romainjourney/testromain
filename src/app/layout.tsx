import "../styles/globals.css";
export const metadata = { title: "Aussitôt Bon", description: "Repas de chef en 3 minutes" };
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="fr"><body>{children}</body></html>;
}
