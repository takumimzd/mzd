/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "github-contributions-api.deno.dev",
      },
    ],
  },
};

module.exports = nextConfig
