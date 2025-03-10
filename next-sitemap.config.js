/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://vb.rågsvedsif.se/",
  generateRobotsTxt: true,
  exclude: [],
  alternateRefs: [
    { href: "https://vb.rågsvedsif.se/sv", hreflang: "sv" },
    { href: "https://vb.rågsvedsif.se/en", hreflang: "en" },
    { href: "https://vb.rågsvedsif.se/es", hreflang: "es" },
    { href: "https://vb.rågsvedsif.se/fr", hreflang: "fr" },
    { href: "https://vb.rågsvedsif.se/de", hreflang: "de" },
    { href: "https://vb.rågsvedsif.se/sr", hreflang: "sr" },
    { href: "https://vb.rågsvedsif.se/pl", hreflang: "pl" },
    { href: "https://vb.rågsvedsif.se/uk", hreflang: "uk" },
  ],
  additionalPaths: async () => {
    const result = [];
    const locales = ["sv", "en", "es", "fr", "de", "sr", "uk", "pl"];
    const teamIds = ["1", "2"];

    for (const locale of locales) {
      result.push({ loc: `/${locale}` });
      result.push({ loc: `/${locale}/about` });
      result.push({ loc: `/${locale}/men-team` });
      result.push({ loc: `/${locale}/youth-team` });

      for (const teamId of teamIds) {
        result.push({ loc: `/${locale}/teams/${teamId}` });
      }
    }

    return result;
  },
};
