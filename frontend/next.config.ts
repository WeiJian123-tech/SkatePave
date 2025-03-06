import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  /* Generate static page: https://nextjs.org/docs/pages/building-your-application/deploying/static-exports */
  output: 'export',
  trailingSlash: true,
  basePath: '/SkatePave',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/SkatePave/' : '',
};

export default nextConfig;
