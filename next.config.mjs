/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "static.omg.lol",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
