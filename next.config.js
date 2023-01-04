const withBundleAnalyzer = require('@next/bundle-analyzer');

/** @type {import('next').NextConfig} */
const config = withBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
})(
  {
    reactStrictMode: true, // Recommended for the `pages` directory, default in `app`.
    swcMinify: true,
    cleanDistDir: true,
    images: {
      unoptimized: true,
    },
  }
);

module.exports = config;
