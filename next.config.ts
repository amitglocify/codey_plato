import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Enabling static export
  output: 'export',

  // Optional: other configurations can go here
  // Example: enabling strict mode, adding redirects, etc.
  reactStrictMode: true,  // Optional: enables React Strict Mode
  images: {
    unoptimized: true,  // Optional: useful for static export (disables image optimization)
  },

  // You can add other configurations as needed
};

export default nextConfig;

