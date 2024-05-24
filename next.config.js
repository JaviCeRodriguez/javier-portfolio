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

const withVercelToolbar = require("@vercel/toolbar/plugins/next")();
module.exports = withVercelToolbar(nextConfig);
