import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/kg", destination: "/ky", permanent: true },
      { source: "/kg/:path*", destination: "/ky/:path*", permanent: true },
      { source: "/kz", destination: "/kk", permanent: true },
      { source: "/kz/:path*", destination: "/kk/:path*", permanent: true },
    ];
  },
};

export default nextConfig;
