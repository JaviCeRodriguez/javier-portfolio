/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "cdn-images-1.medium.com",
      },
    ],
  },
};

module.exports = nextConfig;
