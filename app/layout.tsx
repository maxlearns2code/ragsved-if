import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "./components/Header";
import "./globals.css";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "RIF Volleyball - New Heights Since 2024",
  description:
    "RIF Volleyball, established in 2024, continuing the legacy of Rågsved IF since 1958. Join our passionate volleyball community in the Stockholm area.",
  keywords: [
    "RIF volleyball",
    "volleyball team",
    "volleyball club",
    "sports community",
    "volleyball 2024",
    "competitive volleyball",
    "Stockholm volleyball",
    "Rågsved IF 1958",
  ],
  openGraph: {
    title: "RIF Volleyball - New Heights Since 2024",
    description: "Join RIF Volleyball in Stockholm - building on our club's legacy since 1958.",
    images: [
      {
        url: "/images/logo.png",
        width: 542,
        height: 761,
        alt: "RIF Club Logo",
      },
    ],
    locale: 'sv_SE',
    type: 'website',
    siteName: 'RIF Volleyball',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <main>
          {children}
          <Analytics />
        </main>
        <Footer />
      </body>
    </html>
  );
}
