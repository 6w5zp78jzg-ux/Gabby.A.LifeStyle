"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { client, urlFor } from "@/lib/sanity";

export default function EditorialGrid() {
  const [posts, setPosts] = useState<any[]>([]);

  useEffect(() => {
    // Hemos quitado el [0...2]. Ahora traemos todos los posts.
    const query = `*[_type == "post"] | order(_createdAt desc) {
      title,
      excerpt,
      mainImage,
      category,
      "slug": slug.current
    }`;
    client.fetch(query).then((data) => setPosts(data));
  }, []);

  if (posts.length === 0) return null;

  return (
    <section className="w-full max-w-7xl mx-auto px-4 py-24">
      {/* Usamos un grid dinámico. 
         Los posts se irán acomodando solos en dos columnas en escritorio.
      */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
        
        {posts.map((post, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index % 2 * 0.2 }}
            // Este truco de 'md:mt-32' en los posts pares crea el efecto de revista desalineada (clase mundial)
            className={`flex flex-col gap-4 ${index % 2 !== 0 ? "md:mt-32" : ""}`}
          >
            <div className="relative aspect-[4/5] w-full overflow-hidden bg-gray-100">
              {post.mainImage && (
                <Image 
                  src={urlFor(post.mainImage).url()} 
                  alt={post.title} 
                  fill 
                  className="object-cover hover:scale-105 transition-transform duration-[2s] ease-out"
                />
              )}
            </div>
            
            <div className="flex flex-col gap-2 mt-4">
              <p className="text-[10px] uppercase tracking-[0.3em] text-magAccent font-bold">
                {post.category}
              </p>
              <h2 className="font-serif text-3xl md:text-4xl leading-tight">
                {post.title}
              </h2>
              <p className="text-sm text-gray-500 leading-relaxed max-w-sm mt-2 italic">
                &quot;{post.excerpt}&quot;
              </p>
            </div>
          </motion.div>
        ))}

      </div>
    </section>
  );
}
