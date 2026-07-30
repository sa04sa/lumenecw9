import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/lumenecw9",
  images: {
    unoptimized: true, // Requis pour GitHub Pages
  },
};

export default nextConfig;
