/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com'],
    // no optimizar las imagenes
    unoptimized: true,
  },
}

module.exports = nextConfig
