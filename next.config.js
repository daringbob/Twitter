/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images:{
    domains: ["br.atsit.in"]
  }
}

module.exports = nextConfig
