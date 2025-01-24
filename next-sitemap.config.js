module.exports = {
  siteUrl: 'https://ragsvedsif-vk.vercel.app',
  generateRobotsTxt: true,
  exclude: ['/[locale]', '/[locale]/teams/[id]'],
  alternateRefs: [
    { href: 'https://ragsvedsif-vk.vercel.app/sv', hreflang: 'sv' },
    { href: 'https://ragsvedsif-vk.vercel.app/en', hreflang: 'en' },
    { href: 'https://ragsvedsif-vk.vercel.app/es', hreflang: 'es' },
    { href: 'https://ragsvedsif-vk.vercel.app/fr', hreflang: 'fr' },
    { href: 'https://ragsvedsif-vk.vercel.app/de', hreflang: 'de' },
    { href: 'https://ragsvedsif-vk.vercel.app/sr', hreflang: 'sr' },
    { href: 'https://ragsvedsif-vk.vercel.app/pl', hreflang: 'pl' },    
    { href: 'https://ragsvedsif-vk.vercel.app/uk', hreflang: 'uk' },
  ],
  additionalPaths: async () => {
    const result = [];
    const locales = ["sv", "en", "es", "fr", "de", "sr", "uk", "pl"];
    const teamIds = ['1', '2'];

    for (const locale of locales) {
      result.push({ loc: `/${locale}` });
      result.push({ loc: `/${locale}/about` });
      
      for (const teamId of teamIds) {
        result.push({ loc: `/${locale}/teams/${teamId}` });
      }
    }

    return result;
  },
};
