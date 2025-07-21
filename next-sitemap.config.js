/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://vb.xn--rgsvedsif-52a.se",
  generateRobotsTxt: true,
  exclude: [],
  changefreq: "weekly",
  priority: 0.7,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/*", "/_next/*", "/vercel/*"],
      },
    ],
  },
  alternateRefs: [
    { href: "https://vb.xn--rgsvedsif-52a.se/sv", hreflang: "sv" },
    { href: "https://vb.xn--rgsvedsif-52a.se/en", hreflang: "en" },
    { href: "https://vb.xn--rgsvedsif-52a.se/es", hreflang: "es" },
    { href: "https://vb.xn--rgsvedsif-52a.se/fr", hreflang: "fr" },
    { href: "https://vb.xn--rgsvedsif-52a.se/de", hreflang: "de" },
    { href: "https://vb.xn--rgsvedsif-52a.se/sr", hreflang: "sr" },
    { href: "https://vb.xn--rgsvedsif-52a.se/pl", hreflang: "pl" },
    { href: "https://vb.xn--rgsvedsif-52a.se/uk", hreflang: "uk" },
    { href: "https://vb.xn--rgsvedsif-52a.se/sv", hreflang: "x-default" },
  ],
  additionalPaths: async () => {
    const result = [];
    const locales = ["sv", "en", "es", "fr", "de", "sr", "uk", "pl"];
    const teamIds = ["1", "2"];

    result.push({
      loc: "/",
      priority: 1.0,
      changefreq: "daily",
    });

    for (const locale of locales) {
      result.push({
        loc: `/${locale}`,
        priority: 1.0,
        changefreq: "daily",
      });

      result.push({
        loc: `/${locale}/about`,
        priority: 0.8,
        changefreq: "weekly",
      });
      result.push({
        loc: `/${locale}/men-team`,
        priority: 0.8,
        changefreq: "weekly",
      });
      result.push({
        loc: `/${locale}/youth-team`,
        priority: 0.8,
        changefreq: "weekly",
      });

      for (const teamId of teamIds) {
        result.push({
          loc: `/${locale}/teams/${teamId}`,
          priority: 0.7,
          changefreq: "weekly",
        });
      }
    }

    return result;
  },
};
