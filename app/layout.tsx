// /app/layout.tsx
import Navigation from '@/components/layout/Navigation';
import { Analytics } from '@vercel/analytics/next';
import type { Metadata } from "next";
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: "Cretaceous Couch - Indie Horror Game Studio",
    template: "%s | Cretaceous Couch"
  },
  description: "We develop psychological horror games that challenge conventional gameplay mechanics and industry standards.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-black text-white min-h-screen flex flex-col">
        <Navigation />
        <main className="flex-grow">
          {children}
        </main>
        <Analytics />
      </body>
    </html>
  );
}