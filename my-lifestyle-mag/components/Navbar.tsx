"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Navbar() {
  // Sustituye esta URL por el perfil real de tu amiga
  const instagramUrl = "https://instagram.com/ladywithdrmz";

  return (
    // Quitamos el mix-blend-difference para que se vea siempre blanco puro sobre el fondo oscuro
    <nav className="absolute top-0 w-full p-6 md:px-12 flex justify-between items-center z-50 text-white">
      
      {/* Lado Izquierdo: Logo Personal */}
      <Link href="/" className="flex flex-col items-center hover:opacity-80 transition-opacity">
        {/* Aquí usamos una cursiva elegante. Para que sea idéntica al diseño, 
            luego te diré cómo inyectar una fuente manuscrita real. */}
        <span className="font-serif text-2xl md:text-4xl italic tracking-wider">
          ladywithdrmz
        </span>
        <span className="text-[8px] md:text-[10px] uppercase tracking-[0.4em] opacity-80 mt-1">
          Lifestyle
        </span>
      </Link>

      {/* Lado Derecho: Menú e Instagram */}
      <div className="flex items-center gap-8 md:gap-10">
        
        {/* Enlace Home con la línea activa debajo */}
        <div className="flex flex-col items-center">
          <Link 
            href="/" 
            className="text-xs md:text-sm uppercase tracking-[0.2em] hover:opacity-70 transition-opacity"
          >
            Home
          </Link>
          <div className="w-[120%] h-[1px] bg-white mt-1 opacity-70"></div>
        </div>

        {/* Botón de Instagram Funcional */}
        <Link 
          href={instagramUrl} 
          target="_blank" 
          rel="noopener noreferrer"
          className="hover:opacity-70 transition-opacity hover:scale-110 duration-300"
          aria-label="Visit Instagram"
        >
          {/* Icono vectorial nativo, sin depender de librerías */}
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="22" 
            height="22" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="1.5" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
          </svg>
        </Link>

      </div>
    </nav>
  );
}
