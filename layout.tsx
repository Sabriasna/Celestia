import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Astro Site",
  description: "Site d’astrologie (thème astral, apprentissage, ères)",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body style={{ margin: 0, fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif" }}>
        <nav
          style={{
            display: "flex",
            gap: 12,
            padding: 12,
            borderBottom: "1px solid #ddd",
            position: "sticky",
            top: 0,
            background: "white",
          }}
        >
          <Link href="/">Accueil</Link>
          <Link href="/theme-astral">Thème astral</Link>
          <Link href="/apprendre">Apprendre</Link>
          <Link href="/eres">Ères</Link>
        </nav>

        <div style={{ padding: 16, maxWidth: 900, margin: "0 auto" }}>{children}</div>
      </body>
    </html>
  );
}
