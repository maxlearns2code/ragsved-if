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
  const path = "/youth-team";

  return {
    title: t("metaTitle"),
    description: t("description"),
    openGraph: {
      title: t("metaTitle"),
      description: t("description"),
      images: [
        {
          url: "https://ragsvedsif-vk.vercel.app/images/youth-team-hero.webp",
          width: 1200,
          height: 630,
          alt: t("alt"),
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

export default async function YouthTeamPage() {
  return <YouthTeamClient />;
}
