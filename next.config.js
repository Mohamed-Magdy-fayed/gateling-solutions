/** @type {import("next").NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  // Environment variables that are available at build time and runtime
  env: {
    RESEND_API_KEY: process.env.RESEND_API_KEY,
    FROM_EMAIL: process.env.FROM_EMAIL,
    ADMIN_EMAIL: process.env.ADMIN_EMAIL,
    WEBSITE_URL: process.env.WEBSITE_URL,
    CONTACT_PHONE: process.env.CONTACT_PHONE,
  },
  images: {
    domains: ["localhost"],
    formats: ["image/webp", "image/avif"],
  },
  // Enable compression
  compress: true,
  // Optimize for production
  poweredByHeader: false,
  reactStrictMode: true,
};

module.exports = nextConfig;


