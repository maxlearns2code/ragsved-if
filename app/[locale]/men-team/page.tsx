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
  const path = "/men-team";
  const fullDescription = `${t("description.line1")} ${t(
    "description.line2"
  )}`;

  return {
    title: t("metaTitle"),
    description: fullDescription,
    keywords: tbis("keywords"),
    openGraph: {
      title: t("metaTitle"),
      description: fullDescription,
      images: [
        {
          url: "/images/logo.png",
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
      canonical: `https://vb.xn--rgsvedsif-52a.se/${locale}${path}`,
      languages: {
        sv: `https://vb.xn--rgsvedsif-52a.se/sv${path}`,
        en: `https://vb.xn--rgsvedsif-52a.se/en${path}`,
        es: `https://vb.xn--rgsvedsif-52a.se/es${path}`,
        fr: `https://vb.xn--rgsvedsif-52a.se/fr${path}`,
        de: `https://vb.xn--rgsvedsif-52a.se/de${path}`,
        sr: `https://vb.xn--rgsvedsif-52a.se/sr${path}`,
        pl: `https://vb.xn--rgsvedsif-52a.se/pl${path}`,
        uk: `https://vb.xn--rgsvedsif-52a.se/uk${path}`,
      },
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
