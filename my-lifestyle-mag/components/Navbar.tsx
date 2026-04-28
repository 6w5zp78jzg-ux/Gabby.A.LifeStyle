"use client";
import Link from "next/link";
import Image from "next/image";
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({ subsets: ['latin'] });

export default function Navbar() {
  const instagramUrl = "https://instagram.com/ladywithdrmz";
  const tiktokUrl = "https://www.tiktok.com/@ladywithdrmz?_r=1&_t=ZN-95vMyewKgYo";

  return (
    <nav className="absolute top-0 left-0 right-0 w-full max-w-[100vw] p-4 md:p-6 md:px-12 flex justify-between items-center z-50 text-white overflow-x-hidden">
      
      {/* Lado Izquierdo: LOGO (Tamaño aumentado +15%) */}
      <Link href="/" className="hover:opacity-80 transition-opacity shrink-0">
        <Image 
          src="/logo.png" 
          alt="Lady with Dreams Logo"
          width={250} 
          height={100}
          className="w-[145px] md:w-[225px] h-auto object-contain mix-blend-screen"
          priority
        />
      </Link>

      {/* Lado Derecho: Ubicación y Redes */}
      <div className="flex items-center gap-3 md:gap-10">
        <div className="flex flex-col items-center">
          <Link 
            href="/" 
            className={`${montserrat.className} text-[8px] md:text-[10px] lg:text-xs uppercase tracking-[0.2em] hover:opacity-70 transition-opacity whitespace-nowrap`}
          >
            San Francisco-Marbella
          </Link>
          <div className="w-full h-[1px] bg-white mt-1 opacity-70"></div>
        </div>

        <div className="flex items-center gap-3 md:gap-4 shrink-0">
          <Link href={instagramUrl} target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity hover:scale-110 duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-[18px] h-[18px] md:w-[20px] md:h-[20px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
          </Link>

          <Link href={tiktokUrl} target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity hover:scale-110 duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-[18px] h-[18px] md:w-[20px] md:h-[20px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path>
            </svg>
          </Link>
        </div>
      </div>
    </nav>
  );
}
