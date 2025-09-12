import Hero from "../components/Hero";
import NewsCarousel from "../components/NewsCarousel";
import Sponsor from "../components/Sponsor";
import Status from "../components/Status";
import { getPageCanonical } from "@/utils/metadata";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const tbis = await getTranslations({ locale, namespace: "Metadata" });
const siteUrl = "https://vb.xn--rgsvedsif-52a.se";
  const canonicalUrl = getPageCanonical(locale, "");
  const languages = {
    sv: getPageCanonical("sv", ""),
    en: getPageCanonical("en", ""),
    es: getPageCanonical("es", ""),
    fr: getPageCanonical("fr", ""),
    de: getPageCanonical("de", ""),
    sr: getPageCanonical("sr", ""),
    uk: getPageCanonical("uk", ""),
    pl: getPageCanonical("pl", ""),
    pt: getPageCanonical("pt", ""),
    "x-default": getPageCanonical("sv", ""),
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
    metadataBase: new URL(siteUrl),
    applicationName: tbis("siteName"),
    formatDetection: { telephone: false },
  };
}

export default function Home() {
  return (
    <div className="text-4xl">
      <Hero />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Status />
        <NewsCarousel />
      </div>
      <Sponsor />
    </div>
  );
}
