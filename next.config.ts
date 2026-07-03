import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
    images: {
        remotePatterns: [
    {
      protocol: "https",
      hostname: "shophubapi.chbkn.run",
      pathname:"/**"
    },
  ],
  },
};

export default nextConfig;
