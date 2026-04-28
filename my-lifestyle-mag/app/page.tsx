import Navbar from "@/components/Navbar";
import HeroMagazine from "@/components/HeroMagazine";

export default function Home() {
  return (
    /* Cambiamos bg-white a bg-black para que encaje con tu estética de lujo. 
       Añadimos h-screen y overflow-hidden para que no se pueda hacer scroll hacia abajo.
    */
    <main className="h-screen w-full bg-black overflow-hidden relative">
      
      {/* El Header con tu logo y redes */}
      <Navbar />

      {/* El Hero con tu foto, texto y botón de Instagram */}
      <HeroMagazine />

    </main>
  );
}
