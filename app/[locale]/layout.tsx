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

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Metadata" });

  const siteUrl = "https://vb.xn--rgsvedsif-52a.se";
  const path = "";
  const canonicalUrl = `${siteUrl}/${locale}${path}`;

  const languages = {
    'sv': `${siteUrl}/sv${path}`,
    'en': `${siteUrl}/en${path}`,
    'es': `${siteUrl}/es${path}`,
    'fr': `${siteUrl}/fr${path}`,
    'de': `${siteUrl}/de${path}`,
    'sr': `${siteUrl}/sr${path}`,
    'uk': `${siteUrl}/uk${path}`,
    'pl': `${siteUrl}/pl${path}`,
    'x-default': `${siteUrl}/sv${path}`
  };

  return {
    title: t("title"),
    description: t("description"),
    keywords: t("keywords"),
    openGraph: {
      title: t("ogTitle"),
      description: t("ogDescription"),
      images: [
        {
          url: "${siteUrl}/images/logo.png",
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
      canonical: canonicalUrl,
      languages,
    },
    metadataBase: new URL("https://vb.xn--rgsvedsif-52a.se"),
    applicationName: t("siteName"),
    formatDetection: {
      telephone: false,
    },
    verification: {
      google: "google22bc59f960ea8815",
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
