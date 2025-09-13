import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#3b82f6'
};

export const metadata: Metadata = {
  title: 'Pierre Boisnard - Développeur Full-Stack',
  description: 'Portfolio de Pierre Boisnard, développeur full-stack spécialisé en React, Next.js, Node.js et MongoDB. Découvrez mes projets et réalisations.',
  keywords: 'développeur, full-stack, React, Next.js, Node.js, MongoDB, freelance, portfolio',
  authors: [{ name: 'Pierre Boisnard' }],
  creator: 'Pierre Boisnard',
  openGraph: {
    title: 'Pierre Boisnard - Développeur Full-Stack',
    description: 'Portfolio de Pierre Boisnard, développeur full-stack spécialisé en React, Next.js, Node.js et MongoDB.',
    url: 'https://pierre-boisnard.vercel.app',
    siteName: 'Pierre Boisnard Portfolio',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}