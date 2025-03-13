import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getTranslations } from "next-intl/server";
import { Geist, Geist_Mono } from "next/font/google";
import { notFound } from "next/navigation";
import Footer from "../components/Footer";
import Header from "../components/Header";
import SponsorshipBanner from "../components/SponsorshipBanner";
import "../globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export async function generateMetadata({
  params,
  pathname,
}: {
  params: Promise<{ locale: string }>;
  pathname: string;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Metadata" });
  const path = pathname?.replace(`/${locale}`, "") || "";

  return {
    title: t("title"),
    description: t("description"),
    keywords: t("keywords"),
    openGraph: {
      title: t("ogTitle"),
      description: t("ogDescription"),
      images: [
        {
          url: "/images/logo.png",
          width: 542,
          height: 761,
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

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  let messages;
  try {
    messages = (await import(`../../messages/${locale}.json`)).default;
  } catch (error) {
    console.error(`Failed to load messages for locale ${locale}:`, error);
    notFound();
  }

  return (
    <html lang={locale}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NextIntlClientProvider messages={messages} locale={locale}>
          <Header />
          <SponsorshipBanner />
          <main>{children}</main>
          <Footer />
          <Analytics />
          <SpeedInsights />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
