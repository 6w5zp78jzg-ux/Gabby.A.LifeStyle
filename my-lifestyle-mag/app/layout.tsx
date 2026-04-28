import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  // He actualizado el título para que coincida con tu marca
  title: "Lady with Dreams | Lifestyle & Purpose",
  description: "A World-Class Editorial Experience",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${playfair.variable} ${inter.variable}`}>
      {/* CAMBIOS REALIZADOS:
          1. bg-black: Fondo negro puro.
          2. text-white: Texto blanco por defecto.
          3. overflow-hidden: BLOQUEA el scroll para que sea una landing de una sola pieza.
          4. selection: Cambiado a fondo blanco y texto negro cuando el usuario selecciona algo.
      */}
      <body className="bg-black text-white font-sans antialiased overflow-hidden selection:bg-white selection:text-black">
        {children}
      </body>
    </html>
  );
}
