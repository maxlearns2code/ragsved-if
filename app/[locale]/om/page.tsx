import { getCanonicalUrl } from "@/utils/metadata";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import AnimatedTimelineSection from "../../components/AnimatedTimelineSection";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "AboutUs" });

  const canonicalUrl = getCanonicalUrl(`/${locale}/om/`);

  const languages = {
    sv: getCanonicalUrl("/sv/om/"),
    en: getCanonicalUrl("/en/om/"),
    es: getCanonicalUrl("/es/om/"),
    fr: getCanonicalUrl("/fr/om/"),
    de: getCanonicalUrl("/de/om/"),
    sr: getCanonicalUrl("/sr/om/"),
    uk: getCanonicalUrl("/uk/om/"),
    pl: getCanonicalUrl("/pl/om/"),
    pt: getCanonicalUrl("/pt/om/"),
    "x-default": getCanonicalUrl("/sv/om/"),
  };

  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
    keywords: t("keywords"),
    openGraph: {
      title: t("ogTitle"),
      description: t("ogDescription"),
      images: [
        {
          url: "/images/desktop-volleyball-game.webp",
          width: 1920,
          height: 1542,
          alt: t("ogImageAlt"),
        },
      ],
      locale: t("lang"),
      type: "website",
      siteName: t("siteName"),
    },
    alternates: {
      canonical: canonicalUrl,
      languages,
    },
    metadataBase: new URL("https://vb.xn--rgsvedsif-52a.se"),
    applicationName: t("siteName"),
    formatDetection: {
      telephone: false,
    },
  };
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "AboutUs" });

  const sections = [
    "howItAllBegan",
    "humbleBeginnings",
    "risingToTheChallenge",
    "aimingHigher",
    "growthAndExpansion",
    "whereWeStand",
    "ourMission",
  ];

  return (
    <section id="about" className="py-10 lg:py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center overflow-hidden">
          {t("title")}
        </h1>

        <div className="relative max-w-5xl mx-auto">
          <div
            className="hidden md:block absolute left-1/2 -ml-0.5 w-0.5 h-full bg-secondary"
            aria-hidden="true"
          />
          {sections.map((section, index) => (
            <AnimatedTimelineSection
              key={section}
              section={section}
              index={index}
              locale={locale}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
