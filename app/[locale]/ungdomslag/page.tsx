import { getCanonicalUrl } from "@/utils/metadata";
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

  const canonicalUrl = getCanonicalUrl(`/${locale}/youth-team`);

  const languages = {
    sv: getCanonicalUrl("/sv/youth-team"),
    en: getCanonicalUrl("/en/youth-team"),
    es: getCanonicalUrl("/es/youth-team"),
    fr: getCanonicalUrl("/fr/youth-team"),
    de: getCanonicalUrl("/de/youth-team"),
    sr: getCanonicalUrl("/sr/youth-team"),
    uk: getCanonicalUrl("/uk/youth-team"),
    pl: getCanonicalUrl("/pl/youth-team"),
    pt: getCanonicalUrl("/pt/youth-team"),
    "x-default": getCanonicalUrl("/sv/youth-team"),
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
