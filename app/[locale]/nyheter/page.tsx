
import NewsHub from "@/app/components/NewsHub";
import { getPageCanonical } from "@/utils/metadata";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const tbis = await getTranslations({ locale, namespace: "Metadata" });

  const canonicalUrl = getPageCanonical(locale, "nyheter");
  const languages = {
    sv: getPageCanonical("sv", "nyheter"),
    en: getPageCanonical("en", "nyheter"),
    es: getPageCanonical("es", "nyheter"),
    fr: getPageCanonical("fr", "nyheter"),
    de: getPageCanonical("de", "nyheter"),
    sr: getPageCanonical("sr", "nyheter"),
    uk: getPageCanonical("uk", "nyheter"),
    pl: getPageCanonical("pl", "nyheter"),
    pt: getPageCanonical("pt", "nyheter"),
    "x-default": getPageCanonical("sv", "nyheter"),
  };

  return {
    title: tbis("siteName"),
    description: tbis("description"),
    openGraph: {
      title: tbis("siteName"),
      description: tbis("description"),
      locale: tbis("lang"),
      type: "website",
      siteName: tbis("siteName"),
    },
    alternates: {
      canonical: canonicalUrl,
      languages,
    },
    metadataBase: new URL("https://vb.xn--rgsvedsif-52a.se"),
    applicationName: tbis("siteName"),
    formatDetection: { telephone: false },
  };
}

export default function NewsHubPage() {
  return <NewsHub />;
}
