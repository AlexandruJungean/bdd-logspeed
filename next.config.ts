import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true, // Creates /about/index.html instead of /about.html (better for cPanel)
  images: {
    unoptimized: true, // Required for static export
  },
};

export default nextConfig;
