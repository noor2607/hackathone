import bundleAnalyzer from "@next/bundle-analyzer";

/** @type {import('next').NextConfig} */
const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

const nextConfig = withBundleAnalyzer({
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        pathname: "/**",
      },
    ],
  },
  reactStrictMode: true, // Enables React Strict Mode for better debugging
  compress: true, // Enables Gzip compression for performance
  experimental: {
    optimizeCss: true, // Minifies CSS
    nextScriptWorkers: true, // Moves scripts to Web Workers for performance
  },
});

export default nextConfig;
