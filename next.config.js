/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  serverExternalPackages: [],
  experimental: {
    optimizePackageImports: ["react", "react-dom"]
  },
};

module.exports = nextConfig;
