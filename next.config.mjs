/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'demo-dashboard-taupe.vercel.app',
        pathname: '**',
      },
    ],
  },
};

export default nextConfig;
