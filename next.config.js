/** @type {import('next').NextConfig} */
import withPlugins from 'next-compose-plugins';

const config = withPlugins([
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

export default config;
