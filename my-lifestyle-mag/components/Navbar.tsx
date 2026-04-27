"use client";
import { motion } from "framer-motion";

export default function Navbar() {
  const today = new Date().toLocaleDateString('en-US', { 
    month: 'long', 
    year: 'numeric' 
  });

  return (
    <nav className="fixed top-0 w-full p-6 md:px-12 flex justify-between items-end z-50 mix-blend-difference text-white border-b border-white/10 pb-4">
      {/* Lado Izquierdo: Datos Editoriales */}
      <div className="hidden md:flex flex-col gap-1 text-[10px] uppercase tracking-[0.2em] opacity-80">
        <span>Marbella / SF</span>
        <span>{today}</span>
      </div>

      {/* Centro: Logo (Ahora con Serif y más grande) */}
      <div className="absolute left-1/2 -translate-x-1/2 bottom-5">
        <h1 className="font-serif text-2xl md:text-3xl tracking-tighter uppercase">
          Vanguard
        </h1>
      </div>

      {/* Lado Derecho: Acciones */}
      <div className="flex items-center gap-8 text-[10px] uppercase tracking-[0.2em]">
        <button className="hidden md:block hover:text-magAccent transition-colors">
          Subscribe
        </button>
        <button className="font-bold hover:opacity-50 transition-opacity flex items-center gap-2">
          <span className="md:inline hidden">Menu</span>
          <div className="flex flex-col gap-1">
            <div className="w-4 h-[1px] bg-white"></div>
            <div className="w-4 h-[1px] bg-white"></div>
          </div>
        </button>
      </div>
    </nav>
  );
}
