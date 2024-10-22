// next.config.js
const path = require('path');

module.exports = {
  reactStrictMode: true,  // Enables strict mode for React, which helps with debugging.
  
  // Removed NEXT_PUBLIC_INFURA_PROJECT_ID since you're using Ganache
  env: {
    // You can add other environment variables here if needed
    // For example, if you have a Ganache project ID or URL, you can set it here
    // NEXT_PUBLIC_GANACHE_URL: process.env.NEXT_PUBLIC_GANACHE_URL,
  },

  webpack: (config, { isServer }) => {
    // This helps to resolve the "fs" module error in Next.js when working with Web3
    if (!isServer) {
      config.resolve.fallback = {
        fs: false,   // `fs` is not available on the client, so it needs to be disabled.
        net: false,  // Similarly, disable `net`.
        tls: false   // Also disable `tls` as it's a server-side functionality.
      };
    }

    // Additional custom webpack configuration can go here
    config.resolve.alias['@'] = path.resolve(__dirname);
    return config;
  }
};
