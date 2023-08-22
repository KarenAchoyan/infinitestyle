/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  // swcMinify: true,
  env: {
    API_URL: "https://infinite.geeklab.am/api",
    IMAGE_URL: "https://infinite.geeklab.am/storage/",
  },
  unoptimized:true
}

module.exports = nextConfig
