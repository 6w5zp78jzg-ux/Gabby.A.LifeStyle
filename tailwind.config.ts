import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        magLight: "#f4f4f0", // Un blanco roto, lujoso, como papel viejo
        magDark: "#1a1a1a", // Negro suave, no puro, para menos fatiga visual
        magAccent: "#8b7355", // Tono arena/tierra elegante
      },
      fontFamily: {
        serif: ["var(--font-playfair)"],
        sans: ["var(--font-inter)"],
      },
    },
  },
  plugins: [],
};
export default config;
