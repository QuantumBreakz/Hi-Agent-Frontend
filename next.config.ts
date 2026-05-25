import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    // Allow local images from public/ folder (no external domains needed)
    unoptimized: false,
  },
}

export default nextConfig
