import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  async redirects() {
    return [
      // Old Webflow blog listing path
      {
        source: "/archive-blog",
        destination: "/blog",
        permanent: true,
      },
      // Old Webflow ecommerce product pages
      {
        source: "/product/:slug",
        destination: "/donate",
        permanent: true,
      },
      // Old Webflow blog category pages
      {
        source: "/blog-post-categories/:category",
        destination: "/blog",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
