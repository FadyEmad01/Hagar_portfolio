import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  images: {
    domains: ['admin.meatpacking-district.com','i.pinimg.com'],
  },
};

export default nextConfig;
