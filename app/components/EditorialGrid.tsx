"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function EditorialGrid() {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 py-24 md:py-32">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16">
        
        {/* Bloque 1: Imagen grande izquierda */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="col-span-1 md:col-span-7 flex flex-col gap-4"
        >
          <div className="relative aspect-[4/5] w-full overflow-hidden bg-gray-200">
            <Image 
              src="https://images.unsplash.com/photo-1493666438817-866a91353ca9?q=80&w=2000&auto=format&fit=crop" 
              alt="Interior design" 
              fill 
              className="object-cover hover:scale-105 transition-transform duration-[2s] ease-out"
            />
          </div>
          <h2 className="font-serif text-3xl md:text-4xl mt-4">Espacios que Respiran</h2>
          <p className="text-sm text-gray-600 uppercase tracking-widest">Arquitectura</p>
        </motion.div>

        {/* Bloque 2: Texto e imagen pequeña derecha (Desplazado hacia abajo) */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="col-span-1 md:col-span-5 flex flex-col md:pt-48 gap-4"
        >
          <p className="text-lg md:text-xl leading-relaxed font-serif text-gray-800 mb-8 border-l-2 border-magAccent pl-6">
            "La ausencia de ruido visual no es un capricho estético, es una necesidad psicológica en el siglo XXI."
          </p>
          <div className="relative aspect-square w-full overflow-hidden bg-gray-200">
            <Image 
              src="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=1000&auto=format&fit=crop" 
              alt="Ceramics" 
              fill 
              className="object-cover hover:scale-105 transition-transform duration-[2s] ease-out"
            />
          </div>
          <h2 className="font-serif text-2xl mt-4">La Nueva Cerámica</h2>
          <p className="text-sm text-gray-600 uppercase tracking-widest">Artesanía</p>
        </motion.div>

      </div>
    </section>
  );
}
