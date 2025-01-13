"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const FaFacebook = dynamic(() =>
  import("react-icons/fa").then((mod) => mod.FaFacebook)
);
const FaInstagram = dynamic(() =>
  import("react-icons/fa").then((mod) => mod.FaInstagram)
);
const FaTwitter = dynamic(() =>
  import("react-icons/fa").then((mod) => mod.FaTwitter)
);
const FaArrowUp = dynamic(() =>
  import("react-icons/fa").then((mod) => mod.FaArrowUp)
);

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isVisible && (
        <button onClick={scrollToTop} className="fixed bottom-0">
          <FaArrowUp />
        </button>
      )}
    </>
  );
};

const Footer = () => {
  const t = useTranslations("Footer");
  const tHeader = useTranslations("Header");

  return (
    <motion.footer
      id="contact"
      className="pb-10 md:pb-16"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="flex justify-center">
            <Link
              href="/"
              className="text-2xl font-bold"
              aria-label={t("general.returnToHomepage")}
            >
              <Image
                src="/images/logo.png"
                alt={t("general.logoAlt")}
                width={50}
                height={50}
                priority
              />
            </Link>
          </div>
          <address className="text-center not-italic">
            <h3 className="font-semibold mb-2">{t("contact.contactUs")}</h3>
            <p className="text-sm">
              {t("contact.address")}: Trollesundsvägen 47, 124 34 Bandhagen
            </p>
            <p className="text-sm">
              {t("contact.phone")}:{" "}
              <a href="tel:+460707356835" className="hover:underline">
                (+46) 0707356835
              </a>
            </p>
            <p className="text-sm">
              {t("contact.email")}:{" "}
              <a
                href="mailto:volleyboll@ragsvedsif.org"
                className="text-secondary hover:underline"
              >
                volleyboll@ragsvedsif.org
              </a>
            </p>
          </address>
          <div className="text-center">
            <h3 className="font-semibold mb-2">{t("links.usefulLinks")}</h3>
            <ul className="text-sm">
              <li>
                <a
                  href="https://www.volleyboll.se/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary hover:underline"
                >
                  {t("links.swedishVolleyballFederation")}
                </a>
              </li>
              <li>
                <a
                  href="https://www.xn--rgsvedsif-52a.se/start/?ID=455990"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary hover:underline"
                >
                  {t("links.ragsvedIF")}
                </a>
              </li>
              <li>
                <a
                  href="https://www.korpen.se/korpenstockholm/aktiviteter/volleyboll/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary hover:underline"
                >
                  {t("links.korpenStockholmVolleyball")}
                </a>
              </li>
              <li>
                <a
                  href="https://www.profixio.com/app/tournaments"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary hover:underline"
                >
                  {t("links.profixio")}
                </a>
              </li>
            </ul>
          </div>
          <div className="text-center">
            <h3 className="font-semibold mb-2">{t("social.followUs")}</h3>
            <div className="flex justify-center space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t("social.facebookAriaLabel")}
              >
                <FaFacebook
                  className="w-6 h-6 hover:text-blue-600"
                  aria-hidden="true"
                />
              </a>
              <a
                href="https://www.instagram.com/ragsvedsif_volleybollherr?igsh=NDV4Z2prMWx3cGkw"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t("social.instagramAriaLabel")}
              >
                <FaInstagram
                  className="w-6 h-6 hover:text-pink-500"
                  aria-hidden="true"
                />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t("social.twitterAriaLabel")}
              >
                <FaTwitter
                  className="w-6 h-6 hover:text-blue-400"
                  aria-hidden="true"
                />
              </a>
            </div>
          </div>
        </div>
        <nav aria-label={t("general.footerNavigation")} className="mt-8">
          <ul className="flex flex-wrap justify-center gap-8">
            <li>
              <Link href="/about" className="hover:underline">
                {tHeader("about")}
              </Link>
            </li>
            <li>
              <Link href="/#teams" className="hover:underline">
                {tHeader("teams")}
              </Link>
            </li>
            <li>
              <Link href="/#schedule" className="hover:underline">
                {tHeader("schedule")}
              </Link>
            </li>
            <li>
              <Link href="/#contact" className="hover:underline">
                {tHeader("contact")}
              </Link>
            </li>
          </ul>
        </nav>
        <hr className="my-4 border-secondary" />
        <p className="text-center text-sm">
          {t("general.copyright", { year: new Date().getFullYear() })}
        </p>
      </div>
      <BackToTopButton />
    </motion.footer>
  );
};

export default Footer;
