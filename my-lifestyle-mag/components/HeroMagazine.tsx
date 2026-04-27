"use client";
import { motion } from "framer-motion";

export default function HeroMagazine() {
  const title = "The Art of Slow Living".split(" ");

  return (
    <section className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden pt-20 px-4">
      {/* Etiqueta superior */}
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="uppercase tracking-[0.3em] text-xs font-semibold mb-8 text-magAccent"
      >
        Volume IV — Spring
      </motion.p>

      {/* Titular animado palabra por palabra con máscara */}
      <h1 className="font-serif text-6xl md:text-8xl lg:text-[10vw] leading-none text-center flex flex-wrap justify-center gap-4 lg:gap-8 overflow-hidden">
        {title.map((word, index) => (
          <motion.span
            key={index}
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{
              duration: 1,
              ease: [0.76, 0, 0.24, 1],
              delay: index * 0.1,
            }}
            className="inline-block"
          >
            {word}
          </motion.span>
        ))}
      </h1>

      {/* Bajada / Subtítulo */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="mt-12 md:mt-24 max-w-md text-center"
      >
        <p className="text-sm md:text-base leading-relaxed text-gray-600">
          Exploring the intersection of mindful design, brutalist architecture, and avant-garde gastronomy.
        </p>
      </motion.div>
    </section>
  );
}
