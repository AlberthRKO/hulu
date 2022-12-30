/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // * agregamos los dominios de donde sacaremos las imagenes
  images: {
    domains: ["links.papareact.com", "image.tmdb.org"],
  },
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
};

module.exports = nextConfig;
