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
        "vb.xn--rgsvedsif-52a.se",
        "www.vb.xn--rgsvedsif-52a.se"
      ]
    }
  },
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "ragsvedsif-vk.vercel.app",
          },
        ],
        destination: "https://vb.xn--rgsvedsif-52a.se/:path*",
        permanent: true
      },
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "www.vb.xn--rgsvedsif-52a.se",
          },
        ],
        destination: "https://vb.xn--rgsvedsif-52a.se/:path*",
        permanent: true
      }
    ];
  }
};

export default withNextIntl(nextConfig);
