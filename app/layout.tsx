// /app/layout.tsx
import { Analytics } from '@/components/Analytics';
import { CookieConsent } from '@/components/CookieConsent';
import { Footer } from '@/components/layout/Footer';
import { Navigation } from '@/components/layout/Navigation';
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Crivyx Interactive - Indie Horror Game Studio",
    template: "%s | Crivyx Interactive"
  },
  description: "We develop psychological horror games that challenge conventional gameplay mechanics and industry standards.",
  keywords: ["horror games", "indie game studio", "game development", "psychological horror", "Paleogenesis", "Antwerp games"],
  authors: [{ name: "Crivyx Interactive" }],
  creator: "Crivyx Interactive",
  publisher: "Crivyx Interactive",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.crivyx.com",
    siteName: "Crivyx Interactive",
    title: "Crivyx Interactive - Indie Horror Game Studio",
    description: "We develop psychological horror games that challenge conventional gameplay mechanics and industry standards.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Crivyx Interactive"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Crivyx Interactive - Indie Horror Game Studio",
    description: "We develop psychological horror games that challenge conventional gameplay mechanics and industry standards.",
    images: ["/og-image.jpg"],
    creator: "@CrixyxGames"
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    shortcut: '/favicon.ico',
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180' }
    ],
  },
  manifest: '/site.webmanifest',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
  themeColor: '#000000'
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased bg-primary-black text-primary-white min-h-screen flex flex-col">
        <Navigation />
        <main id="main-content" className="flex-grow">
          {children}
        </main>
        <Footer />
        <CookieConsent />
        <Analytics />
      </body>
    </html>
  );
}