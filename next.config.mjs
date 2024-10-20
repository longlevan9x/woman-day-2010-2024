/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img.icons8.com',
        port: '',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'media-be.chewy.com',
        port: '',
        pathname: '**',
      },
    ],
  }
};

export default nextConfig;
