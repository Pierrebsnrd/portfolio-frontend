import { Inter } from "next/font/google";
import "./globals.css";
import { Metadata, Viewport } from "next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://pierreboisnard.com"),
  title: "Pierre Boisnard - Développeur Full-Stack",
  description:
    "Portfolio de Pierre Boisnard, développeur full-stack spécialisé en React, Next.js, Node.js et MongoDB. Découvrez mes projets et réalisations.",
  keywords:
    "développeur, full-stack, React, Next.js, Node.js, MongoDB, freelance, portfolio",
  authors: [{ name: "Pierre Boisnard" }],
  creator: "Pierre Boisnard",
  robots: "index, follow",
  alternates: {
    canonical: "https://pierreboisnard.com/",
  },
  manifest: "/manifest.json",
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "32x32", type: "image/x-icon" },
      { url: "/icons/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/icons/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/icons/favicon-96x96.png", sizes: "96x96", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
      { url: "/icons/icon-152x152.png", sizes: "152x152", type: "image/png" },
    ],
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "PB Portfolio",
  },
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    title: "Pierre Boisnard - Développeur Full-Stack",
    description:
      "Portfolio de Pierre Boisnard, développeur full-stack spécialisé en React, Next.js, Node.js et MongoDB.",
    url: "https://pierreboisnard.com/",
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

export const viewport: Viewport = {
  themeColor: "#3b82f6",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon-16x16.png" />
        <link rel="shortcut icon" href="/favicon.ico" />

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
              url: "https://pierreboisnard.com/",
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
