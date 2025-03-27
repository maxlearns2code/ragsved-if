/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://vb.xn--rgsvedsif-52a.se/",
  generateRobotsTxt: true,
  exclude: [],
  alternateRefs: [
    { href: "https://vb.xn--rgsvedsif-52a.se/sv", hreflang: "sv" },
    { href: "https://vb.xn--rgsvedsif-52a.se/en", hreflang: "en" },
    { href: "https://vb.xn--rgsvedsif-52a.se/es", hreflang: "es" },
    { href: "https://vb.xn--rgsvedsif-52a.se/fr", hreflang: "fr" },
    { href: "https://vb.xn--rgsvedsif-52a.se/de", hreflang: "de" },
    { href: "https://vb.xn--rgsvedsif-52a.se/sr", hreflang: "sr" },
    { href: "https://vb.xn--rgsvedsif-52a.se/pl", hreflang: "pl" },
    { href: "https://vb.xn--rgsvedsif-52a.se/uk", hreflang: "uk" },
  ],
  additionalPaths: async () => {
    const result = [];
    const locales = ["sv", "en", "es", "fr", "de", "sr", "uk", "pl"];
    const teamIds = ["1", "2"];

    for (const locale of locales) {
      result.push({ loc: `/${locale}` });
      result.push({ loc: `/${locale}/om` });
      result.push({ loc: `/${locale}/herrlag` });
      result.push({ loc: `/${locale}/ungdomslag` });

      for (const teamId of teamIds) {
        result.push({ loc: `/${locale}/lag/${teamId}` });
      }
    }

    return result;
  },
};
