import type { NextConfig } from "next";

// Static export: the site has no server features, so it ships as plain files in ./out
// and is served by Cloudflare Workers static assets (see wrangler.jsonc).
const nextConfig: NextConfig = {
  output: "export",
  images: {
    // The default optimizer needs a server. Cloudinary images are resized by Cloudinary
    // via lib/image-loader.ts; local demo images are rendered with `unoptimized`.
    loader: "custom",
    loaderFile: "./lib/image-loader.ts",
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
