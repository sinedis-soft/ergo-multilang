import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        has: [{ type: "host", value: "www\\.euro-polis\\.com" }],
        destination: "https://euro-polis.com/en",
        permanent: true,
      },
      {
        source: "/:path*",
        has: [{ type: "host", value: "www\\.euro-polis\\.com" }],
        destination: "https://euro-polis.com/:path*",
        permanent: true,
      },
      { source: "/kg", destination: "/ky", permanent: true },
      { source: "/kg/:path*", destination: "/ky/:path*", permanent: true },
      { source: "/kz", destination: "/kk", permanent: true },
      { source: "/kz/:path*", destination: "/kk/:path*", permanent: true },
    ];
  },
};

export default nextConfig;
