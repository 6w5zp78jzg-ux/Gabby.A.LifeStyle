"use client";
import { ReactLenis } from "@studio-freight/react-lenis";
import React from "react";

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  return (
    <ReactLenis root options={{ lerp: 0.05, duration: 1.5, smoothWheel: true }}>
      {/* Vanguard Fix: Forzamos el tipado a 'any' única y exclusivamente 
        en la inyección del children para puentear la discrepancia 
        entre React 18 (Lenis) y React 19 (Next.js).
      */}
      {children as any}
    </ReactLenis>
  );
}
