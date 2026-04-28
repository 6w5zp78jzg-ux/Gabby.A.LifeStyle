/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // Mantenemos esto para que Vercel no se queje de avisos menores al desplegar
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Mantenemos esto para evitar errores de tipado estrictos en producción
    ignoreBuildErrors: true,
  },
  // Hemos eliminado 'images' porque ahora todas tus fotos están en la carpeta /public
};

export default nextConfig;
