// /app/layout.tsx
import Navigation from '@/components/layout/Navigation';
import { Analytics } from '@vercel/analytics/next';
import type { Metadata } from "next";
import './globals.css';

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
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased bg-brutal-white min-h-screen flex flex-col">
        <Analytics />
        <Navigation />
        <main className="flex-grow mt-32 transition-all duration-300">
          {children}
        </main>
      </body>
    </html>
  );
}