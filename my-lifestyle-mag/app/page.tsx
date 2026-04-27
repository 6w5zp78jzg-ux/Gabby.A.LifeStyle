import SmoothScroll from "@/components/SmoothScroll";
import HeroMagazine from "@/components/HeroMagazine";
import EditorialGrid from "@/components/EditorialGrid";

export default function Home() {
  return (
    <SmoothScroll>
      <main className="min-h-screen w-full">
        {/* Barra de navegación minimalista - Mix Blend Mode para adaptarse al fondo */}
        <nav className="fixed top-0 w-full p-6 flex justify-between items-center z-50 mix-blend-difference text-white">
          <div className="font-sans text-xs tracking-[0.2em] uppercase font-bold">
            Vanguard
          </div>
          <button className="font-sans text-xs tracking-widest uppercase hover:text-magAccent transition-colors">
            Menú
          </button>
        </nav>

        {/* Componentes de la Revista */}
        <HeroMagazine />
        <EditorialGrid />
        
        {/* Footer Editorial Minimalista */}
        <footer className="w-full py-24 border-t border-gray-300 mt-20 flex flex-col items-center justify-center px-4 text-center">
          <h3 className="font-serif text-4xl mb-6">Únete al Círculo</h3>
          <p className="text-sm text-gray-500 max-w-md mb-8">
            Suscríbete para recibir ensayos semanales sobre diseño, cultura y arte contemporáneo.
          </p>
          <input 
            type="email" 
            placeholder="Tu correo electrónico" 
            className="bg-transparent border-b border-magDark px-4 py-2 w-full max-w-xs focus:outline-none focus:border-magAccent transition-colors font-sans text-center"
          />
        </footer>
      </main>
    </SmoothScroll>
  );
}
