import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./i18n/request.ts");

const nextConfig: NextConfig = {
  experimental: {
    serverActions: {
      allowedOrigins: [
        "localhost:3000",
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
          { key: "X-DNS-Prefetch-Control", value: "on" },
          { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "origin-when-cross-origin" },
        ],
      },
    ];
  },
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "vb.xn--rgsvedsif-52a.se" },
      { protocol: "https", hostname: "www.vb.xn--rgsvedsif-52a.se" },
    ],
    formats: ["image/avif", "image/webp"],
  },
  poweredByHeader: false,
  reactStrictMode: true,
};

export default withNextIntl(nextConfig);
