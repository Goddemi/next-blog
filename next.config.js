/** @type {import('next').NextConfig} */

const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

// export const firebaseTitle = process.env.firebase_title;
// export const firebaseId = process.env.firebase_id; --> 별도의 config파일안에 넣고

const nextConfig = (phase) => {
  // if (phase === PHASE_DEVELOPMENT_SERVER) {
  //   return {
  //     env: {
  //       firebase_title: "youneedverse",
  //       firebase_id: "e9492",
  //     },
  //     reactStrictMode: true,
  //     images: {
  //       remotePatterns: [
  //         {
  //           protocol: "https",
  //           hostname: "res.cloudinary.com",
  //           port: "",
  //           pathname: "/dhfmls9fs/image/upload/**",
  //         },
  //       ],
  //     },
  //   };
  // }

  return {
    // env: {
    //   firebase_title: "youneedverse",
    //   firebase_id: "e9492",
    // },
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
