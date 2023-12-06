const withMDX = require('@next/mdx')();
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'lh3.googleusercontent.com', 
    'avatars.githubusercontent.com'
    ],
  },
  pageExtensions: ['js', 'ts', 'jsx', 'tsx', 'mdx'],
};

module.exports = withMDX(nextConfig);
