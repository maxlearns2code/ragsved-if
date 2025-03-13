import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import AnimatedTimelineSection from "../../components/AnimatedTimelineSection";

// Correct type definition for Next.js App Router
type PageProps = {
  params: { locale: string };
};

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const locale = params.locale;
  const t = await getTranslations({ locale, namespace: "AboutUs" });
  
  // Since this is the about page, we know the path
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
    applicationName: t("siteName"),
    formatDetection: {
      telephone: false,
    },
  };
}

export default async function AboutPage({ params }: PageProps) {
  const locale = params.locale;
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
