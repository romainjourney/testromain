import "../styles/globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aussitôt Bon",
  description: "Des repas de chef, prêts en 3 minutes.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
