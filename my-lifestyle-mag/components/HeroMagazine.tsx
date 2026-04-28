"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Bodoni_Moda, Great_Vibes, Montserrat } from 'next/font/google';

const bodoni = Bodoni_Moda({ subsets: ['latin'] });
const greatVibes = Great_Vibes({ weight: '400', subsets: ['latin'] });
const montserrat = Montserrat({ subsets: ['latin'] });

export default function HeroMagazine() {
  const [showSocials, setShowSocials] = useState(false);

  const instagramUrl = "https://instagram.com/ladywithdrmz";
  const tiktokUrl = "https://www.tiktok.com/@ladywithdrmz?_r=1&_t=ZN-95vMyewKgYo";

  return (
    // FIX: Usamos min-h-[100dvh] para que la altura sea perfecta en móviles (ignora la barra de Safari)
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
      <div className="relative z-20 flex flex-col items-center text-center px-4 md:px-6 w-full mt-12 md:mt-20">
        
        {/* WELCOME TO */}
        <motion.p 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
          className={`${montserrat.className} uppercase tracking-[0.4em] text-[10px] md:text-xs mb-4 md:mb-6 opacity-90`}
        >
          Welcome To
        </motion.p>

        {/* LADY WITH DREAMS (Corregido el solapamiento) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.8, delay: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          className="relative flex flex-col items-center w-full max-w-4xl"
        >
          {/* FIX: LADY un poco más grande en móvil (text-7xl) */}
          <h1 className={`${bodoni.className} text-7xl md:text-[11rem] leading-none tracking-widest uppercase font-normal z-20`}>
            Lady
          </h1>
          {/* FIX: Quitamos 'absolute' y usamos margen negativo (-mt-6 en móvil, -mt-16 en PC) */}
          <div className="z-30 -mt-6 md:-mt-16 text-center w-full">
            {/* FIX: Tamaño de fuente ajustado a text-6xl */}
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
            href="#fotos"
            className={`${montserrat.className} border border-white/50 hover:bg-white hover:text-black transition-all duration-500 px-8 py-3 md:px-12 md:py-4 text-[9px] md:text-[10px] tracking-[0.2em] uppercase backdrop-blur-sm`}
          >
            Enter My World
          </Link>
        </motion.div>

        {/* DESPLEGABLE: VISIT MY SOCIAL MEDIA */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 2.6 }}
          className="mt-8 md:mt-12 relative flex flex-col items-center pb-8"
        >
          <button 
            onClick={() => setShowSocials(!showSocials)}
            className={`${montserrat.className} flex items-center gap-3 hover:opacity-70 transition-opacity uppercase tracking-[0.2em] text-[8px] md:text-[9px]`}
          >
            Visit My Social Media
            <motion.span animate={{ rotate: showSocials ? 180 : 0 }} transition={{ duration: 0.3 }}>
                <svg width="10" height="6" viewBox="0 0 10 6" fill="none" stroke="currentColor">
                    <path d="M1 1L5 5L9 1" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </motion.span>
          </button>

          <AnimatePresence>
            {showSocials && (
              <motion.div 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 10 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="flex gap-6 mt-4"
              >
                <Link href={instagramUrl} target="_blank" className="hover:scale-110 transition-transform">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </Link>
                <Link href={tiktokUrl} target="_blank" className="hover:scale-110 transition-transform">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path>
                  </svg>
                </Link>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
