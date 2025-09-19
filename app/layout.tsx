import { Inter } from "next/font/google";
import "./globals.css";
import { DefaultSeo } from "next-seo";

const inter = Inter({ subsets: ["latin"] });

const seoConfig = {
  title: "Pierre Boisnard - Développeur Full-Stack",
  description:
    "Portfolio de Pierre Boisnard, développeur full-stack spécialisé en React, Next.js, Node.js et MongoDB. Découvrez mes projets et réalisations.",
  canonical: "https://portfolio-frontend-neon-six.vercel.app/",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://portfolio-frontend-neon-six.vercel.app/",
    site_name: "Pierre Boisnard Portfolio",
    title: "Pierre Boisnard - Développeur Full-Stack",
    description:
      "Portfolio de Pierre Boisnard, développeur full-stack spécialisé en React, Next.js, Node.js et MongoDB.",
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
    handle: "@pierreboisnard",
    site: "@pierreboisnard",
    cardType: "summary_large_image",
  },
  additionalMetaTags: [
    {
      name: "keywords",
      content: "développeur, full-stack, React, Next.js, Node.js, MongoDB, freelance, portfolio",
    },
    {
      name: "author",
      content: "Pierre Boisnard",
    },
    {
      name: "creator",
      content: "Pierre Boisnard",
    },
    {
      name: "robots",
      content: "index, follow",
    },
    {
      name: "apple-mobile-web-app-capable",
      content: "yes",
    },
    {
      name: "apple-mobile-web-app-status-bar-style",
      content: "default",
    },
    {
      name: "apple-mobile-web-app-title",
      content: "PB Portfolio",
    },
    {
      name: "theme-color",
      content: "#3b82f6",
    },
  ],
  additionalLinkTags: [
    {
      rel: "icon",
      href: "/favicon.svg",
      type: "image/svg+xml",
    },
    {
      rel: "icon",
      href: "/icons/favicon-16x16.png",
      sizes: "16x16",
      type: "image/png",
    },
    {
      rel: "icon",
      href: "/icons/favicon-32x32.png",
      sizes: "32x32",
      type: "image/png",
    },
    {
      rel: "icon",
      href: "/icons/favicon-96x96.png",
      sizes: "96x96",
      type: "image/png",
    },
    {
      rel: "shortcut icon",
      href: "/favicon.ico",
    },
    {
      rel: "apple-touch-icon",
      href: "/icons/apple-touch-icon.png",
      sizes: "180x180",
    },
    {
      rel: "manifest",
      href: "/manifest.json",
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <head>
        <DefaultSeo {...seoConfig} />

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
