"use client";
import Image from "next/image";
import { motion } from "framer-motion";

// 1. CONFIGURACIÓN MANUAL DE FOTOS
// Añade aquí tantas fotos como quieras. 
// Las imágenes deben estar en la carpeta 'public'
const staticPosts = [
  {
    title: "Mediterranean Bliss",
    category: "Lifestyle",
    excerpt: "Capturing the essence of the golden hour in Marbella.",
    image: "/foto1.jpg", // Nombre del archivo en la carpeta public
  },
  {
    title: "Urban Dreams",
    category: "Travel",
    excerpt: "New perspectives from the heart of San Francisco.",
    image: "/foto2.jpg",
  },
  {
    title: "The Art of Living",
    category: "Purpose",
    excerpt: "Finding beauty in the smallest daily rituals.",
    image: "/foto3.jpg",
  },
  {
    title: "Elevated Style",
    category: "Fashion",
    excerpt: "A curation of timeless pieces and modern silhouettes.",
    image: "/foto4.jpg",
  }
];

export default function EditorialGrid() {
  return (
    // El id="fotos" sigue aquí para que el botón 'Enter My World' funcione
    <section id="fotos" className="w-full max-w-7xl mx-auto px-4 py-24 bg-black text-white">
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
        
        {staticPosts.map((post, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index % 2 * 0.2 }}
            // Mantenemos el efecto de revista desalineada: los impares bajan un poco (md:mt-32)
            className={`flex flex-col gap-4 ${index % 2 !== 0 ? "md:mt-32" : ""}`}
          >
            <div className="relative aspect-[4/5] w-full overflow-hidden bg-zinc-900">
              <Image 
                src={post.image} 
                alt={post.title} 
                fill 
                className="object-cover hover:scale-105 transition-transform duration-[2s] ease-out"
              />
            </div>
            
            <div className="flex flex-col gap-2 mt-4">
              <p className="text-[10px] uppercase tracking-[0.3em] text-white/60 font-bold">
                {post.category}
              </p>
              <h2 className="font-serif text-3xl md:text-4xl leading-tight italic">
                {post.title}
              </h2>
              <p className="text-sm text-gray-400 leading-relaxed max-w-sm mt-2 font-light">
                &quot;{post.excerpt}&quot;
              </p>
            </div>
          </motion.div>
        ))}

      </div>
    </section>
  );
}
