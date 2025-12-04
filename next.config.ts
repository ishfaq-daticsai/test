import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    // This ignores ESLint errors during builds (warnings still show)
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
