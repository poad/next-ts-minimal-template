/** @type {import('next').NextConfig} */
const withPlugins = require('next-compose-plugins');

module.exports = withPlugins([
],
  {
    webpack5: true,
    reactStrictMode: true,
    esmExternals: true,
    swcLoader: true,
    swcMinify: true,
    experimental: {
      modern: true,
    }
  }
);
