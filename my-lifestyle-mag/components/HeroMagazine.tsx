"use client";
import { motion } from "framer-motion";

export default function HeroMagazine() {
  const title = "The Art of Slow Living".split(" ");

  return (
    <section className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden pt-20 px-4 bg-black text-white">
      {/* Etiqueta superior */}
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="uppercase tracking-[0.4em] text-[10px] md:text-xs font-semibold mb-8 opacity-60"
      >
        Volume IV — Spring
      </motion.p>

      {/* Titular animado palabra por palabra con máscara */}
      <h1 className="font-serif text-6xl md:text-8xl lg:text-[10vw] leading-none text-center flex flex-wrap justify-center gap-x-4 lg:gap-x-8 overflow-hidden">
        {title.map((word, index) => (
          <motion.span
            key={index}
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{
              duration: 1.2,
              ease: [0.76, 0, 0.24, 1],
              delay: index * 0.1,
            }}
            className="inline-block"
          >
            {word}
          </motion.span>
        ))}
      </h1>

      {/* Bajada / Subtítulo Actualizado */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1.2 }}
        className="mt-12 md:mt-20 max-w-lg text-center"
      >
        <p className="text-xs md:text-sm tracking-[0.2em] uppercase leading-relaxed opacity-50 font-light">
          A curated collection of global journeys, slow food, and the art of living well.
        </p>
      </motion.div>

      {/* Indicador de scroll minimalista */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
      >
        <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent opacity-20"></div>
      </motion.div>
    </section>
  );
}
