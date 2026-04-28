"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function HeroMagazine() {
  const instagramUrl = "https://instagram.com/ladywithdrmz";

  return (
    <section className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-black text-white">
      
      {/* 1. Imagen de Fondo (Reemplaza src con tu foto real en la carpeta public) */}
      <div className="absolute inset-0 w-full h-full">
        {/* Usamos un color de fondo oscuro por si la imagen tarda en cargar, 
            y le ponemos una capa negra semitransparente encima para que el texto resalte */}
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        {/* Quita el comentario de abajo y ajusta la ruta cuando tengas tu imagen en la carpeta public */}
        {/* <Image 
          src="/tu-imagen-de-fondo.jpg" 
          alt="Lady with Dreams Background" 
          fill 
          className="object-cover opacity-60"
          priority
        /> */}
      </div>

      {/* 2. Contenedor Principal */}
      <div className="relative z-20 flex flex-col items-center text-center px-4 w-full mt-10">
        
        {/* "WELCOME TO" */}
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="uppercase tracking-[0.4em] text-[10px] md:text-xs font-light mb-4 md:mb-6"
        >
          Welcome To
        </motion.p>

        {/* Grupo de Títulos ("LADY" + "with Dreams") */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.4, ease: "easeOut" }}
          className="relative flex flex-col items-center"
        >
          {/* LADY gigante */}
          <h1 className="font-serif text-7xl md:text-[9rem] leading-none tracking-widest uppercase font-light">
            Lady
          </h1>
          
          {/* "with Dreams" superpuesto en cursiva */}
          <div className="absolute top-[60%] md:top-[65%] w-[120%] text-center z-30">
            {/* Nota: 'italic' da el pego, pero para la tipografía manuscrita perfecta 
                necesitaremos inyectar una fuente Script en el layout */}
            <span className="font-serif italic text-4xl md:text-7xl tracking-wide normal-case drop-shadow-lg">
              with Dreams
            </span>
          </div>
        </motion.div>

        {/* Separador con el Lacito */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-16 md:mt-24 flex items-center justify-center w-full max-w-md gap-4"
        >
          <div className="h-[1px] w-full bg-white/40"></div>
          {/* Icono de Lazo SVG puro */}
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="text-white shrink-0">
            <path d="M12 12c-2.5-3-6-3-8-1s-1 5 1 7 7-3 7-6zm0 0c2.5-3 6-3 8-1s1 5-1 7-7-3-7-6z" />
            <path d="M12 13v6" />
          </svg>
          <div className="h-[1px] w-full bg-white/40"></div>
        </motion.div>

        {/* "LIFESTYLE. PURPOSE. ELEVATED." */}
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="uppercase tracking-[0.3em] text-[8px] md:text-[10px] mt-6 md:mt-8 font-light"
        >
          Lifestyle. Purpose. Elevated.
        </motion.p>

        {/* Botón Principal: Enter My World */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="mt-10 md:mt-12"
        >
          <Link 
            href="#about" // Cambia esto a la ruta de tu sección o blog
            className="border border-white/50 hover:bg-white hover:text-black transition-all duration-500 px-8 py-3 md:px-12 md:py-4 text-[10px] md:text-xs tracking-[0.2em] uppercase backdrop-blur-sm"
          >
            Enter My World
          </Link>
        </motion.div>

        {/* Enlace inferior de Instagram */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.8 }}
          className="mt-10 md:mt-14"
        >
          <Link 
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 hover:opacity-70 transition-opacity uppercase tracking-[0.2em] text-[8px] md:text-[10px]"
          >
            Visit My Instagram
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="16" 
              height="16" 
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
        </motion.div>

      </div>
    </section>
  );
}
