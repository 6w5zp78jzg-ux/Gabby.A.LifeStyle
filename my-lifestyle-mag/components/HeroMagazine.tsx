"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Bodoni_Moda, Great_Vibes, Montserrat } from 'next/font/google';

const bodoni = Bodoni_Moda({ subsets: ['latin'] });
const greatVibes = Great_Vibes({ weight: '400', subsets: ['latin'] });
const montserrat = Montserrat({ subsets: ['latin'] });

export default function HeroMagazine() {
  const instagramUrl = "https://instagram.com/ladywithdrmz";

  return (
    <section className="relative min-h-[100dvh] w-full flex flex-col items-center justify-center overflow-hidden bg-black text-white">
      
      {/* CONTENEDOR DE IMÁGENES */}
      <div className="absolute inset-0 w-full h-full">
        {/* Foto para MÓVIL (9:16) */}
        <div className="block md:hidden absolute inset-0 w-full h-full">
            <Image 
              src="/hero-bg-mobile.jpg" 
              alt="Lady with Dreams Mobile" 
              fill 
              className="object-cover"
              priority
            />
        </div>

        {/* Foto para DESKTOP (Horizontal) */}
        <div className="hidden md:block absolute inset-0 w-full h-full">
            <Image 
              src="/hero-bg.jpg" 
              alt="Lady with Dreams Desktop" 
              fill 
              className="object-cover"
              priority
            />
        </div>

        <div className="absolute inset-0 bg-black/75 z-10"></div>
      </div>

      {/* CONTENIDO (Texto y Botones) */}
      {/* AJUSTE: mt-16 en móvil y mt-32 en desktop para que acompañe la subida del Navbar */}
      <div className="relative z-20 flex flex-col items-center text-center px-4 md:px-6 w-full mt-16 md:mt-32">
        
        {/* WELCOME TO */}
        <motion.p 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
          className={`${montserrat.className} uppercase tracking-[0.4em] text-[10px] md:text-xs mb-4 md:mb-6 opacity-90`}
        >
          Welcome To
        </motion.p>

        {/* LADY WITH DREAMS */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.8, delay: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          className="relative flex flex-col items-center w-full max-w-4xl"
        >
          <h1 className={`${bodoni.className} text-7xl md:text-[11rem] leading-none tracking-widest uppercase font-normal z-20`}>
            Lady
          </h1>
          
          <div className="z-30 mt-2 md:-mt-4 text-center w-full">
            <span className={`${greatVibes.className} text-6xl md:text-[9rem] tracking-normal normal-case drop-shadow-2xl`}>
              with Dreams
            </span>
          </div>
        </motion.div>

        {/* Separador */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 1.4 }}
          className="mt-12 md:mt-24 flex items-center justify-center w-full max-w-[250px] md:max-w-sm gap-4"
        >
          <div className="h-[1px] w-full bg-white/30"></div>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="text-white/80 shrink-0">
            <path d="M12 12c-2.5-3-6-3-8-1s-1 5 1 7 7-3 7-6zm0 0c2.5-3 6-3 8-1s1 5-1 7-7-3-7-6z" />
            <path d="M12 13v6" />
          </svg>
          <div className="h-[1px] w-full bg-white/30"></div>
        </motion.div>

        {/* LIFESTYLE. PURPOSE. ELEVATED. */}
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 1.8, ease: "easeOut" }}
          className={`${montserrat.className} uppercase tracking-[0.3em] text-[8px] md:text-[10px] mt-6 md:mt-8 opacity-90`}
        >
          Lifestyle. Purpose. Elevated.
        </motion.p>

        {/* BOTÓN: ENTER MY WORLD */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 2.2, ease: "easeOut" }}
          className="mt-10 md:mt-12"
        >
          <Link 
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`${montserrat.className} border border-white/50 hover:bg-white hover:text-black transition-all duration-500 px-8 py-3 md:px-12 md:py-4 text-[9px] md:text-[10px] tracking-[0.2em] uppercase backdrop-blur-sm`}
          >
            Enter My World
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
