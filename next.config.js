const { withContentlayer } = require("next-contentlayer");
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "tailwindui.com",
      "images.unsplash.com",
      "cdn.dribbble.com",
      "m.media-amazon.com",
      "ik.imagekit.io",
      "miro.medium.com",
      "img.clerk.com",
      "i.ytimg.com",
      "store.storeimages.cdn-apple.com",
      "www.apple.com",
    ],
  },
};

module.exports = withContentlayer(nextConfig);
