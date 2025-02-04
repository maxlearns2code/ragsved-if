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
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Metadata" });

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
    verification: {
      google: "_2bNW27babNrR6fU8FPvcDOHZq-VSXmAm99vbV8W7sE",
    },
    metadataBase: new URL("https://ragsvedsif-vk.vercel.app"),
    applicationName: t("siteName"),
    formatDetection: {
      telephone: false,
    },
    other: {
      "google-site-verification": "_2bNW27babNrR6fU8FPvcDOHZq-VSXmAm99vbV8W7sE",
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
