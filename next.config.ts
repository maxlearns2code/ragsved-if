import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./i18n/request.ts");

const nextConfig: NextConfig = {
  experimental: {
    serverActions: {
      allowedOrigins: [
        "localhost:3000",
        "rif-volleyball.vercel.app",
        "ragsvedsif-vk.vercel.app",
        "www.ragsvedsif-vk.vercel.app",
        "vb.xn--rgsvedsif-52a.se",
        "www.vb.xn--rgsvedsif-52a.se",
      ],
    },
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "X-DNS-Prefetch-Control",
            value: "on",
          },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "origin-when-cross-origin",
          },
        ],
      },
    ];
  },
  async redirects() {
    return [
      {
        source: "/:locale(sv|en|es|fr|de|sr|uk|pl)/youth-team",
        destination: "/:locale/ungdomslag",
        permanent: true,
        locale: false,
      },
      {
        source: "/youth-team",
        destination: "/sv/ungdomslag",
        permanent: true,
      },
      {
        source: "/about",
        destination: "/sv/om",
        permanent: true,
      },
      {
        source: "/men-teams",
        destination: "/sv/herrlag",
        permanent: true,
      },
      {
        source: "/teams/:id",
        destination: "/sv/lag/:id",
        permanent: true,
      },

      {
        source: "/:path*",
        has: [
          { type: "host", value: "ragsvedsif-vk.vercel.app" },
          { type: "host", value: "www.ragsvedsif-vk.vercel.app" },
          { type: "host", value: "rif-volleyball.vercel.app" },
          { type: "host", value: "www.vb.xn--rgsvedsif-52a.se" },
        ],
        destination: "https://vb.xn--rgsvedsif-52a.se/:path*",
        permanent: true,
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "vb.xn--rgsvedsif-52a.se",
      },
      {
        protocol: "https",
        hostname: "www.vb.xn--rgsvedsif-52a.se",
      },
    ],
    formats: ["image/avif", "image/webp"],
  },
  poweredByHeader: false,
  reactStrictMode: true,
};

export default withNextIntl(nextConfig);
