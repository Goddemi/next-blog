/** @type {import('next').NextConfig} */

const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

const nextConfig = (phase) => {
  return {
    eslint: {
      ignoreDuringBuilds: true,
    },
    reactStrictMode: true,
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "res.cloudinary.com",
          port: "",
          pathname: "/dhfmls9fs/image/upload/**",
        },
      ],
    },
  };
};

module.exports = nextConfig;
