import { Metadata } from "next";
import { getLocale, getTranslations } from "next-intl/server";
import Link from "next/link";
import { getPageCanonical } from "@/utils/metadata";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("NotFound");
  const locale = await getLocale();
  const canonicalUrl = getPageCanonical(locale, "404");
  const languages = {
    sv: getPageCanonical("sv", "404"),
    en: getPageCanonical("en", "404"),
    es: getPageCanonical("es", "404"),
    fr: getPageCanonical("fr", "404"),
    de: getPageCanonical("de", "404"),
    sr: getPageCanonical("sr", "404"),
    uk: getPageCanonical("uk", "404"),
    pl: getPageCanonical("pl", "404"),
    pt: getPageCanonical("pt", "404"),
    "x-default": getPageCanonical("sv", "404"),
  };

  return {
    title: t("title"),
    description: t("description"),
    alternates: {
      canonical: canonicalUrl,
      languages,
    },
    robots: {
      index: false,
      follow: true,
    },
  };
}

export default async function NotFound() {
  const t = await getTranslations("NotFound");
  const locale = await getLocale();

  return (
    <div className="flex flex-col items-center justify-center my-10 md:my-20 xl:my-32">
      <h1 className="text-5xl sm:text-6xl md:text-7xl text-center font-bold mb-8">
        {t("title")}
      </h1>
      <p className="text-2xl sm:text-3xl md:text-4xl mb-8">
        {t("description")}
      </p>
      <Link
        href={locale === "sv" ? "/" : `/${locale}/`}
        className="text-secondary text-xl sm:text-2xl md:text-3xl hover:underline"
      >
        {t("backToHome")}
      </Link>
    </div>
  );
}
