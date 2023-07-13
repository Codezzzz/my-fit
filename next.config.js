// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   images: {
//     domains: ["via.placeholder.com"],
//   },
// };

// module.exports = nextConfig;

const withTwin = require("./withTwin");
/**
 * @type {import('next').NextConfig}
 */
const nextConfig = withTwin({
  // <<- `withTwin` 함수 적용
  reactStrictMode: false,
  swcMinify: true,
  images: {
    domains: ["via.placeholder.com"],
  },
});

module.exports = nextConfig;
