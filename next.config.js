/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.dummyjson.com",
        port: "",
        pathname: "/**/*",
      },
    ],
  },
};

module.exports = nextConfig;
