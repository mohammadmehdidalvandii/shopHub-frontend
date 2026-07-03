import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
    images: {
        remotePatterns: [
    {
      protocol: "https",
      hostname: "https://shop-hub-green.vercel.app",
      pathname:"/**"
    },
  ],
  },
};

export default nextConfig;
