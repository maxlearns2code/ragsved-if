import { getPageCanonical } from "@/utils/metadata";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import YouthTeamClient from "../../components/YouthTeamClient";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Youth-Team" });
  const tbis = await getTranslations({ locale, namespace: "Metadata" });
  const siteUrl = "https://vb.xn--rgsvedsif-52a.se";
  const canonicalUrl = getPageCanonical(locale, "youth-team");
  const languages = {
    sv: getPageCanonical("sv", "youth-team"),
    en: getPageCanonical("en", "youth-team"),
    es: getPageCanonical("es", "youth-team"),
    fr: getPageCanonical("fr", "youth-team"),
    de: getPageCanonical("de", "youth-team"),
    sr: getPageCanonical("sr", "youth-team"),
    uk: getPageCanonical("uk", "youth-team"),
    pl: getPageCanonical("pl", "youth-team"),
    pt: getPageCanonical("pt", "youth-team"),
    "x-default": getPageCanonical("sv", "youth-team"),
  };

  return {
    title: t("metaTitle"),
    description: t("description"),
    openGraph: {
      title: t("metaTitle"),
      description: t("description"),
      images: [
        {
          url: "/images/youth-team-hero.webp",
          width: 1920,
          height: 1080,
          alt: t("alt"),
        },
      ],
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
    formatDetection: {
      telephone: false,
    },
  };
}

export default async function YouthTeamPage() {
  return <YouthTeamClient />;
}
