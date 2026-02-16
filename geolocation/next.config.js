/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  serverRuntimeConfig: {
    secret: "JWTSecret",
  },
  publicRuntimeConfig: {
    apiUrl:
      process.env.NODE_ENV === "development"
        ? "http://localhost:3000/api"
        : "https://geolocation05e55d7f-e60f-4ea8.herokuapp.com/api",
  },
};

module.exports = nextConfig;
