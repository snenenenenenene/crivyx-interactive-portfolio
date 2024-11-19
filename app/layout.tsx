// app/layout.tsx
import type { Metadata } from "next";
import { Analytics } from '../components/Analytics';
import "./globals.css";

export const metadata: Metadata = {
  title: "Coragyps Interactive - Indie Game Studio",
  description: "We develop and publish finely-crafted horror games.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-primary-black">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
