/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.ivandiasfoto.com.br' }],
        destination: 'https://ivandiasfoto.com.br/:path*',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
