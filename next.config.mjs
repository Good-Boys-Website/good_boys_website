/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.coudinary.com",
      },
    ],
  },
};

export default nextConfig;
