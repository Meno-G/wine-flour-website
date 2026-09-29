import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: { root: __dirname },
  // The default locale (Georgian) is served at the site root.
  // Additional locales live under their own prefix, e.g. /en.
  async rewrites() {
    return [{ source: "/", destination: "/ka" }];
  },
  async redirects() {
    return [{ source: "/ka", destination: "/", permanent: true }];
  },
};

export default nextConfig;
