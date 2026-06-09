import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  turbopack: { root: path.resolve(__dirname) },
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "courses.cs.washington.edu" },
      { protocol: "https", hostname: "**.youtube.com" },
    ],
  },
};

export default nextConfig;
