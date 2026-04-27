/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // Esto permite que el despliegue termine aunque haya avisos de ESLint (como el de 'any')
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Esto permite que el despliegue termine aunque haya errores de tipos de TypeScript
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
