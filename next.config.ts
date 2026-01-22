import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  onDemandEntries: {
    maxInactiveAge: 25 * 1000,
    pagesBufferLength: 2,
  },
  turbopack: {
    resolveAlias: {},
  },
};

export default nextConfig;
