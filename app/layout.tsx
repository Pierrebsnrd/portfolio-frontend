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
    icon: "/icons/favicon-32x32.png",
    apple: "/icons/apple-touch-icon.png",
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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://portfolio-frontend-neon-six.vercel.app/" />
        <link rel="shortcut icon" href="/icons/favicon-32x32.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* Schema.org JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Pierre Boisnard",
              jobTitle: "Développeur Web",
              description: "Développeur web spécialisé en React, Next.js, Node.js et MongoDB",
              url: "https://portfolio-frontend-neon-six.vercel.app/",
              sameAs: [
                "https://github.com/Pierrebsnrd",
                "https://www.linkedin.com/in/pierre-boisnard-74514785/"
              ],
              knowsAbout: ["React","Next.js","Node.js","MongoDB","JavaScript","TypeScript"]
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
