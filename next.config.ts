import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
    images: {
        remotePatterns: [
    {
      protocol: "https",
      hostname: "shophubapi.chbkn.dev",
      pathname:"/**"
    },
  ],
  },
};

export default nextConfig;
