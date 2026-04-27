"use client";
import { NextStudio } from "next-sanity/studio";
// El Fix: Tres saltos exactos hacia la raíz de Next.js
import config from "../../../sanity.config";

export default function StudioPage() {
  return <NextStudio config={config} />;
}
