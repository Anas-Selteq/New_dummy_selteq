/** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
// }
module.exports = {
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
  trailingSlash: true,
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },

  onDemandEntries: {
    // Enable managed on-demand entries
    devMiddleware: {
      // Disable prerendering errors
      suppressPreloadError: true,
    },
  },
};

// module.exports = nextConfig
