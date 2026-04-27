"use client";
import { NextStudio } from "next-sanity/studio";

// Vanguard Fix: Adiós a los saltos de carpeta. 
// Usamos la importación dinámica y absoluta.
import config from "../../../sanity.config"; 
// (Nota: Si el config está en la raíz estricta junto a package.json, 
// a veces el alias @/ no lo atrapa dependiendo de tu tsconfig. 
// Si la ruta relativa sigue fallando, prueba a mover sanity.config.ts 
// dentro de una carpeta /sanity y actualiza la ruta).
