import { getRequestConfig } from "next-intl/server";

const locales = ["sv", "en", "fr", "es", "uk", "pl"];

export default getRequestConfig(async ({ requestLocale }) => {
  const locale = (await requestLocale) || "sv";

  const validLocale = locales.includes(locale) ? locale : "sv";

  return {
    locale: validLocale,
    messages: (await import(`../messages/${validLocale}.json`)).default,
  };
});