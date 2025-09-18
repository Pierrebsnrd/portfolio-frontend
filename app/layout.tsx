import { Inter } from "next/font/google";
import "./globals.css";
import { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pierre Boisnard - Développeur Full-Stack",
  description:
    "Portfolio de Pierre Boisnard, développeur full-stack spécialisé en React, Next.js, Node.js et MongoDB. Découvrez mes projets et réalisations.",
  keywords:
    "développeur, full-stack, React, Next.js, Node.js, MongoDB, freelance, portfolio",
  authors: [{ name: "Pierre Boisnard" }],
  creator: "Pierre Boisnard",
  themeColor: "#3b82f6",
  icons: {
    icon: "/icons/favicon-32x32.png",       // favicon onglet navigateur
    apple: "/icons/apple-touch-icon.png",   // icône iOS / raccourci
  },
  openGraph: {
    title: "Pierre Boisnard - Développeur Full-Stack",
    description:
      "Portfolio de Pierre Boisnard, développeur full-stack spécialisé en React, Next.js, Node.js et MongoDB.",
    url: "https://portfolio-frontend-neon-six.vercel.app/",
    siteName: "Pierre Boisnard Portfolio",
    type: "website",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Logo Pierre Boisnard",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pierre Boisnard - Développeur Full-Stack",
    description:
      "Portfolio de Pierre Boisnard, développeur full-stack spécialisé en React, Next.js, Node.js et MongoDB.",
    images: ["/images/og-image.jpg"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <head>
        <link rel="shortcut icon" href="/icons/favicon-32x32.png" />
        {/* Manifest pour PWA / ajout à l'écran */}
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
