import SmoothScroll from "@/components/SmoothScroll";
import HeroMagazine from "@/components/HeroMagazine";
import EditorialGrid from "@/components/EditorialGrid";
import Navbar from "@/components/Navbar"; // Importamos el nuevo Header

export default function Home() {
  return (
    <SmoothScroll>
      <main className="min-h-screen w-full bg-white text-black">
        {/* Usamos el nuevo componente Navbar */}
        <Navbar />

        {/* El Hero sigue igual */}
        <HeroMagazine />

        {/* El Grid que ya conectamos a Sanity */}
        <EditorialGrid />
        
        <footer className="w-full py-24 border-t border-gray-200 mt-20 flex flex-col items-center justify-center px-4 text-center">
          <h3 className="font-serif text-4xl mb-6">Join the Circle</h3>
          <p className="text-sm text-gray-500 max-w-md mb-8 italic">
            Subscribe to receive weekly essays on design, culture, and contemporary art.
          </p>
          <div className="flex w-full max-w-sm border-b border-black py-2">
            <input 
              type="email" 
              placeholder="YOUR EMAIL" 
              className="bg-transparent w-full focus:outline-none text-[10px] tracking-widest uppercase font-sans"
            />
            <button className="text-[10px] font-bold tracking-widest uppercase">Join</button>
          </div>
        </footer>
      </main>
    </SmoothScroll>
  );
}
