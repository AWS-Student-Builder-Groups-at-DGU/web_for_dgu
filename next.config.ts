import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: new URL(process.env.NEXT_PUBLIC_CLOUDFRONT_URL!).hostname,
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
