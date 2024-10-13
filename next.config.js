/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "media.dev.to",
      },
    ],
  },
};

module.exports = nextConfig;
