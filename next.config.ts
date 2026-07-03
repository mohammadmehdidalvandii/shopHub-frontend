import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
    images: {
        remotePatterns: [
    {
      protocol: "https",
      hostname: "https://shop-hub-frontend-pylv9febn-mohammadmehdidalvandiis-projects.vercel.app",
      pathname:"/**"
    },
  ],
  },
};

export default nextConfig;
