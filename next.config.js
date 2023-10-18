/** @type {import('next').NextConfig} */

const API_KEY = process.env.API_KEY;

const nextConfig = {
  reactStrictMode: true,

  async redirects() {
    return [
      {
        source: "/old-blog/:path*",
        destination: "/new-blog/:path*",
        permanent: false,
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: "/api/movies",
        destination: `${process.env.API_URL}/popular?api_key=${API_KEY}`,
      },
      {
        source: "/api/movies/:id",
        destination: `${process.env.API_URL}/:id?api_key=${API_KEY}`,
      },
    ];
  },
}

module.exports = nextConfig
