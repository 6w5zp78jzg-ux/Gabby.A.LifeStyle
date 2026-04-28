"use client";
import Link from "next/link";
import { Great_Vibes, Montserrat } from 'next/font/google';

// Importamos las fuentes
const greatVibes = Great_Vibes({ weight: '400', subsets: ['latin'] });
const montserrat = Montserrat({ subsets: ['latin'] });

export default function Navbar() {
  const instagramUrl = "https://instagram.com/ladywithdrmz";

  return (
    <nav className="absolute top-0 w-full p-6 md:px-12 flex justify-between items-center z-50 text-white">
      
      {/* Lado Izquierdo: Logo Personalizado */}
      <Link href="/" className="flex flex-col items-center hover:opacity-80 transition-opacity">
        <span className={`${greatVibes.className} text-4xl md:text-5xl tracking-normal`}>
          ladywithdrmz
        </span>
        <span className={`${montserrat.className} text-[7px] md:text-[9px] uppercase tracking-[0.4em] opacity-80 mt-1`}>
          Lifestyle
        </span>
      </Link>

      {/* Lado Derecho: Menú (Actualizado) e Instagram */}
      <div className="flex items-center gap-8 md:gap-10">
        
        <div className="flex flex-col items-center">
          <Link 
            href="/" 
            className={`${montserrat.className} text-[10px] md:text-xs uppercase tracking-[0.2em] hover:opacity-70 transition-opacity whitespace-nowrap`}
          >
            San Francisco-Marbella
          </Link>
          {/* Línea decorativa ajustada al nuevo ancho del texto */}
          <div className="w-full h-[1px] bg-white mt-1 opacity-70"></div>
        </div>

        <Link 
          href={instagramUrl} 
          target="_blank" 
          rel="noopener noreferrer"
          className="hover:opacity-70 transition-opacity hover:scale-110 duration-300"
          aria-label="Visit Instagram"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
          </svg>
        </Link>

      </div>
    </nav>
  );
}
