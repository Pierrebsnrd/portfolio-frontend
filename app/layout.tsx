import { Inter } from "next/font/google";
import "./globals.css";
import { Metadata, Viewport } from "next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio-frontend-neon-six.vercel.app"),
  title: "Pierre Boisnard - Développeur Full-Stack",
  description:
    "Portfolio de Pierre Boisnard, développeur full-stack spécialisé en React, Next.js, Node.js et MongoDB. Découvrez mes projets et réalisations.",
  keywords:
    "développeur, full-stack, React, Next.js, Node.js, MongoDB, freelance, portfolio",
  authors: [{ name: "Pierre Boisnard" }],
  creator: "Pierre Boisnard",
  robots: "index, follow",
  alternates: {
    canonical: "https://portfolio-frontend-neon-six.vercel.app/",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/icons/favicon-32x32.png", type: "image/png", sizes: "32x32" },
      { url: "/icons/favicon-16x16.png", type: "image/png", sizes: "16x16" },
    ],
    apple: "/icons/apple-touch-icon.png",
    shortcut: "/icons/favicon-32x32.png",
  },
  openGraph: {
    title: "Pierre Boisnard - Développeur Full-Stack",
    description:
      "Portfolio de Pierre Boisnard, développeur full-stack spécialisé en React, Next.js, Node.js et MongoDB.",
    url: "https://portfolio-frontend-neon-six.vercel.app/",
    siteName: "Pierre Boisnard Portfolio",
    type: "website",
    locale: "fr_FR",
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

// Déplacer themeColor ici
export const viewport: Viewport = {
  themeColor: "#3b82f6",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <head>
        {/* Manifest pour PWA */}
        <link rel="manifest" href="/manifest.json" />


        {/* Schema.org JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Pierre Boisnard",
              jobTitle: "Développeur Full-Stack",
              description:
                "Développeur web spécialisé en React, Next.js, Node.js et MongoDB",
              url: "https://portfolio-frontend-neon-six.vercel.app/",
              sameAs: [
                "https://github.com/Pierrebsnrd",
                "https://www.linkedin.com/in/pierre-boisnard-74514785/",
              ],
              knowsAbout: [
                "React",
                "Next.js",
                "Node.js",
                "MongoDB",
                "JavaScript",
                "TypeScript",
              ],
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        <noscript>
          <div style={{ textAlign: "center", padding: "20px" }}>
            <h1>Pierre Boisnard - Développeur Web</h1>
            <p>Ce site nécessite JavaScript pour fonctionner correctement.</p>
          </div>
        </noscript>
        {children}
      </body>
    </html>
  );
}
