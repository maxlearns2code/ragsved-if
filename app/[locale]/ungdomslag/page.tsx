import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import YouthTeamClient from "../../components/YouthTeamClient";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Youth-Team" });
  const tbis = await getTranslations({ locale, namespace: "Metadata" });

  const siteUrl = "https://vb.xn--rgsvedsif-52a.se";
  const path = "/ungdomslag";
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
    metadataBase: new URL("https://vb.xn--rgsvedsif-52a.se"),
    applicationName: tbis("siteName"),
    formatDetection: {
      telephone: false,
    },
  };
}

export default async function YouthTeamPage() {
  return <YouthTeamClient />;
}
