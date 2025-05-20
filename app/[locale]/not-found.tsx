import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import Link from 'next/link';

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("NotFound");
  const siteUrl = "https://vb.xn--rgsvedsif-52a.se";

  return {
    title: t("title"),
    description: t("description"),
    alternates: {
      canonical: `${siteUrl}/404`,
      languages: {
        'sv': `${siteUrl}/sv/404`,
        'en': `${siteUrl}/en/404`,
        'es': `${siteUrl}/es/404`,
        'fr': `${siteUrl}/fr/404`,
        'de': `${siteUrl}/de/404`,
        'sr': `${siteUrl}/sr/404`,
        'uk': `${siteUrl}/uk/404`,
        'pl': `${siteUrl}/pl/404`,
        'x-default': `${siteUrl}/sv/404`
      }
    },
    robots: {
      index: false,
      follow: true
    }
  };
}

export default async function NotFound() {

  const t = await getTranslations("NotFound");
  const localeT = await getTranslations();
  const locale = localeT("Locale");

  return (
    <div className="flex flex-col items-center justify-center my-10 md:my-20 xl:my-32">
      <h1 className="text-5xl sm:text-6xl md:text-7xl text-center font-bold mb-8">
        {t("title")}
      </h1>
      <p className="text-2xl sm:text-3xl md:text-4xl mb-8">
        {t("description")}
      </p>
      <Link 
        href={`/${locale}/`} 
        className="text-secondary text-xl sm:text-2xl md:text-3xl hover:underline"
      >
        {t("backToHome")}
      </Link>
    </div>
  );
}
