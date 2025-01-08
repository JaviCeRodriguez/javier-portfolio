/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "media.dev.to",
      },
      {
        hostname: "media2.dev.to",
      },
    ],
  },
};

module.exports = nextConfig;
