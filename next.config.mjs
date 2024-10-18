/** @type {import('next').NextConfig} */
const nextConfig = {
  //Allows you to load images from external sources
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
      },
      {
        protocol: 'https',
        hostname: 'ruqoevstkrrwvrjjnwbf.supabase.co',
      },
    ],
  },
}

export default nextConfig
