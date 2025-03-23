import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import AnimatedTimelineSection from "../../components/AnimatedTimelineSection";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "AboutUs" });
  const path = "/about";

  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
    keywords: t("keywords"),
    openGraph: {
      title: t("ogTitle"),
      description: t("ogDescription"),
      images: [
        {
          url: "/images/logo.png",
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
