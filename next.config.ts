import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ["images.unsplash.com"],
  },
  typescript: {
    ignoreBuildErrors: true, // 🔥 skips TS errors in production build
  },
};

export default nextConfig;
