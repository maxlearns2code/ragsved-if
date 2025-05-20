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
  const path = "/men-team";
  const canonicalUrl = `${siteUrl}/${locale}${path}`;

  const languages = {
    sv: `${siteUrl}/sv${path}`,
    en: `${siteUrl}/en${path}`,
    es: `${siteUrl}/es${path}`,
    fr: `${siteUrl}/fr${path}`,
    de: `${siteUrl}/de${path}`,
    sr: `${siteUrl}/sr${path}`,
    uk: `${siteUrl}/uk${path}`,
    pl: `${siteUrl}/pl${path}`,
    "x-default": `${siteUrl}/sv${path}`,
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
          url: `${siteUrl}/images/team-A.webp`, // Fixed template literal
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
    verification: {
      google: "google22bc59f960ea8815",
    },
  };
}

export default async function MenTeamPage() {
  return <MenTeamClient />;
}
