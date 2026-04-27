"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { client, urlFor } from "@/lib/sanity";

export default function EditorialGrid() {
  const [posts, setPosts] = useState<any[]>([]);

  useEffect(() => {
    const query = `*[_type == "post"] | order(_createdAt desc) [0...2] {
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
    <section className="w-full max-w-7xl mx-auto px-4 py-24 md:py-32">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16">
        
        {/* Post 1: La Imagen Principal */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="col-span-1 md:col-span-7 flex flex-col gap-4"
        >
          <div className="relative aspect-[4/5] w-full overflow-hidden bg-gray-100">
            {posts[0]?.mainImage && (
              <Image 
                src={urlFor(posts[0].mainImage).url()} 
                alt={posts[0].title} 
                fill 
                className="object-cover hover:scale-105 transition-transform duration-[2s] ease-out"
              />
            )}
          </div>
          <h2 className="font-serif text-3xl md:text-4xl mt-4">{posts[0]?.title}</h2>
          <p className="text-sm text-gray-600 uppercase tracking-widest">{posts[0]?.category}</p>
        </motion.div>

        {/* Post 2: La Cita y Segunda Imagen */}
        {posts[1] && (
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="col-span-1 md:col-span-5 flex flex-col md:pt-48 gap-4"
          >
            <p className="text-lg md:text-xl leading-relaxed font-serif text-gray-800 mb-8 border-l-2 border-black pl-6">
              &quot;{posts[1]?.excerpt}&quot;
            </p>
            <div className="relative aspect-square w-full overflow-hidden bg-gray-100">
              <Image 
                src={urlFor(posts[1].mainImage).url()} 
                alt={posts[1].title} 
                fill 
                className="object-cover hover:scale-105 transition-transform duration-[2s] ease-out"
              />
            </div>
            <h2 className="font-serif text-2xl mt-4">{posts[1]?.title}</h2>
            <p className="text-sm text-gray-600 uppercase tracking-widest">{posts[1]?.category}</p>
          </motion.div>
        )}

      </div>
    </section>
  );
}
