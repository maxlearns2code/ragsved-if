import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./i18n/request.ts");

const locales = ["sv", "en", "es", "fr", "de", "sr", "uk", "pl", "pt"];
const redirectMappings: [string, string][] = [
  ["about", "om"],
  ["men", "herrlag"],
  ["youth", "ungdomslag"],
  ["teams", "lag"],
  ["news", "nyheter"],
];

const nextConfig: NextConfig = {
  trailingSlash: true,
  experimental: {
    serverActions: {
      allowedOrigins: [
        "localhost:3000",
        "vb.xn--rgsvedsif-52a.se",
        "www.vb.xn--rgsvedsif-52a.se",
      ],
    },
  },
  async redirects() {
    const result = [];

    for (const locale of locales) {
      for (const [oldSlug, newSlug] of redirectMappings) {
        result.push({
          source: `/${locale}/${oldSlug}/`,
          destination: `/${locale}/${newSlug}/`,
          permanent: true,
        });
      }
    }
    return result;
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-DNS-Prefetch-Control", value: "on" },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
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
