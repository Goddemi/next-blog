/** @type {import('next').NextConfig} */

const { PHASE_DEVELOPMENT_SERVER } = requrie("next/constants");

const nextConfig = (phase) => {
  https: if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        firebase_title: "youneedverse",
        firebase_id: "e9492",
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
  }

  return {
    env: {
      firebase_title: "youneedverse",
      firebase_id: "e9492",
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
