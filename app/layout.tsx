import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

// Contraste dramático: Playfair para títulos, Inter para lectura técnica
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "VANGUARD | Lifestyle & Culture",
  description: "A World-Class Editorial Experience",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${playfair.variable} ${inter.variable}`}>
      <body className="bg-magLight text-magDark font-sans antialiased selection:bg-magDark selection:text-magLight">
        {children}
      </body>
    </html>
  );
}
