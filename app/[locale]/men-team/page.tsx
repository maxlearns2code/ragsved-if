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
  )} ${t("description.line3")}`;

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
      canonical: `https://vb.rågsvedsif.se/${locale}${path}`,
      languages: {
        sv: `https://vb.rågsvedsif.se/sv${path}`,
        en: `https://vb.rågsvedsif.se/en${path}`,
        es: `https://vb.rågsvedsif.se/es${path}`,
        fr: `https://vb.rågsvedsif.se/fr${path}`,
        de: `https://vb.rågsvedsif.se/de${path}`,
        sr: `https://vb.rågsvedsif.se/sr${path}`,
        pl: `https://vb.rågsvedsif.se/pl${path}`,
        uk: `https://vb.rågsvedsif.se/uk${path}`,
      },
    },
    metadataBase: new URL("https://vb.rågsvedsif.se"),
    applicationName: tbis("siteName"),
    formatDetection: {
      telephone: false,
    },
  };
}

export default async function MenTeamPage() {
  return <MenTeamClient />;
}
