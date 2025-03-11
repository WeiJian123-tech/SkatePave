import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  /* Generate static page: https://nextjs.org/docs/pages/building-your-application/deploying/static-exports */
  output: 'export',
  images: {
    loader: 'custom',
    loaderFile: './my-loader.ts',
  },
  trailingSlash: true,
  basePath: process.env.NODE_ENV === 'production' ? '/SkatePave' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/SkatePave/' : '',
};

export default nextConfig;
