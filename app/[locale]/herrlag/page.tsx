import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import MenTeamClient from "../../components/MenTeamClient";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Men-Teams" });
  const tbis = await getTranslations({ locale, namespace: "Metadata" });
  const fullDescription = `${t("description.line1")} ${t(
    "description.line2"
  )}`;

  const siteUrl = "https://vb.xn--rgsvedsif-52a.se";
  const path = "/herrlag";
  const canonicalUrl = `${siteUrl}/${locale}${path}`;

  const supportedLocales = ["sv", "en", "es", "fr", "de", "sr", "pl", "uk"];

  const languages = Object.fromEntries(
    supportedLocales.map((lang) => [
      lang,
      `${siteUrl}/${lang}${path}`,
    ])
  );

  return {
    title: t("metaTitle"),
    description: fullDescription,
    keywords: tbis("keywords"),
    openGraph: {
      title: t("metaTitle"),
      description: fullDescription,
      images: [
        {
          url: "/images/team-A.webp",
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
    metadataBase: new URL("https://vb.xn--rgsvedsif-52a.se"),
    applicationName: tbis("siteName"),
    formatDetection: {
      telephone: false,
    },
  };
}

export default async function MenTeamPage() {
  return <MenTeamClient />;
}
