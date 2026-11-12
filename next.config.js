/** @type {import('next').NextConfig} */
// Site 100% estático (Hostinger, public_html). Redirects e headers que ficavam aqui
// agora estão em deploy/htaccess-estatico (www -> raiz, /fotografia-institucional,
// cabeçalhos de segurança, URLs sem barra final).
const nextConfig = {
  output: 'export',
  trailingSlash: false,
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
