"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Bodoni_Moda, Great_Vibes, Montserrat } from 'next/font/google';

// Configuramos la Trinidad Tipográfica
const bodoni = Bodoni_Moda({ subsets: ['latin'] });
const greatVibes = Great_Vibes({ weight: '400', subsets: ['latin'] });
const montserrat = Montserrat({ subsets: ['latin'] });

export default function HeroMagazine() {
  const instagramUrl = "https://instagram.com/ladywithdrmz";

  return (
    <section className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-black text-white">
      
      {/* Imagen de Fondo (Con Overlay oscuro) */}
      <div className="absolute inset-0 w-full h-full">
        <Image 
          src="/hero-bg.jpg" 
          alt="Lady with Dreams Background" 
          fill 
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/75 z-10"></div>
      </div>

      <div className="relative z-20 flex flex-col items-center text-center px-4 w-full mt-12 md:mt-20">
        
        {/* "WELCOME TO" */}
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className={`${montserrat.className} uppercase tracking-[0.4em] text-[10px] md:text-xs mb-4 md:mb-6 opacity-90`}
        >
          Welcome To
        </motion.p>

        {/* COMPOSICIÓN DEL TÍTULO CENTRAL */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.4, ease: "easeOut" }}
          className="relative flex flex-col items-center w-full max-w-4xl"
        >
          {/* LADY gigante con Bodoni */}
          <h1 className={`${bodoni.className} text-[6rem] md:text-[11rem] leading-none tracking-widest uppercase font-normal`}>
            Lady
          </h1>
          
          {/* "with Dreams" superpuesto con fuente de firma */}
          {/* NOTA: En las fuentes script, quitamos el tracking (espaciado) para que las letras se toquen entre sí de forma natural */}
          <div className="absolute top-[45%] md:top-[50%] w-[120%] text-center z-30">
            <span className={`${greatVibes.className} text-6xl md:text-[9rem] tracking-normal normal-case drop-shadow-2xl`}>
              with Dreams
            </span>
          </div>
        </motion.div>

        {/* Separador con el Lacito */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-20 md:mt-32 flex items-center justify-center w-full max-w-sm gap-4"
        >
          <div className="h-[1px] w-full bg-white/30"></div>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="text-white/80 shrink-0">
            <path d="M12 12c-2.5-3-6-3-8-1s-1 5 1 7 7-3 7-6zm0 0c2.5-3 6-3 8-1s1 5-1 7-7-3-7-6z" />
            <path d="M12 13v6" />
          </svg>
          <div className="h-[1px] w-full bg-white/30"></div>
        </motion.div>

        {/* "LIFESTYLE. PURPOSE. ELEVATED." */}
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className={`${montserrat.className} uppercase tracking-[0.3em] text-[8px] md:text-[10px] mt-6 md:mt-8 opacity-90`}
        >
          Lifestyle. Purpose. Elevated.
        </motion.p>

        {/* Botón Principal */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="mt-10 md:mt-12"
        >
          <Link 
            href="#about"
            className={`${montserrat.className} border border-white/50 hover:bg-white hover:text-black transition-all duration-500 px-8 py-3 md:px-12 md:py-4 text-[9px] md:text-[10px] tracking-[0.2em] uppercase backdrop-blur-sm`}
          >
            Enter My World
          </Link>
        </motion.div>

        {/* Enlace inferior de Instagram */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.8 }}
          className="mt-8 md:mt-12"
        >
          <Link 
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`${montserrat.className} flex items-center gap-3 hover:opacity-70 transition-opacity uppercase tracking-[0.2em] text-[8px] md:text-[9px]`}
          >
            Visit My Instagram
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
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
