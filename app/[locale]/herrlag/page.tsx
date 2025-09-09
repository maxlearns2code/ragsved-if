import { getCanonicalUrl } from "@/utils/metadata";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import MenTeamClient from "../../components/MenTeamClient";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Men-Teams" });
  const tbis = await getTranslations({ locale, namespace: "Metadata" });
  const fullDescription = `${t("description.line1")} ${t("description.line2")}`;

  const siteUrl = "https://vb.xn--rgsvedsif-52a.se";
  const canonicalUrl = getCanonicalUrl(`/${locale}/herrlag/`);

  const languages = {
    sv: getCanonicalUrl("/sv/herrlag/"),
    en: getCanonicalUrl("/en/herrlag/"),
    es: getCanonicalUrl("/es/herrlag/"),
    fr: getCanonicalUrl("/fr/herrlag/"),
    de: getCanonicalUrl("/de/herrlag/"),
    sr: getCanonicalUrl("/sr/herrlag/"),
    uk: getCanonicalUrl("/uk/herrlag/"),
    pl: getCanonicalUrl("/pl/herrlag/"),
    pt: getCanonicalUrl("/pt/herrlag/"),
    "x-default": getCanonicalUrl("/sv/herrlag/"),
  };

  return {
    title: t("metaTitle"),
    description: fullDescription,
    keywords: tbis("keywords"),
    openGraph: {
      title: t("metaTitle"),
      description: fullDescription,
      images: [
        {
          url: `${siteUrl}/images/team-A.webp`,
          width: 1920,
          height: 1542,
          alt: tbis("ogImageAlt"),
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

export default async function MenTeamPage() {
  return <MenTeamClient />;
}
