/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        // hostname: 'amplify-amplifytest-singh-amplifyteamdrivebucket28-q9oral1ofnhe.s3.ap-south-1.amazonaws.com',
        hostname:
          "amplify-d2jxt5d9hcjf36-ma-amplifyteamdrivebucket28-n1fsxnyky65o.s3.ap-south-1.amazonaws.com",
        port: "",
        pathname: "/profile-pictures/**",
      },
    ],
  },
};

export default nextConfig;
