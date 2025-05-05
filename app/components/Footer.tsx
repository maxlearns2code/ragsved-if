"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import LanguageSwitcher from "./LanguageSwitcher";

const FaInstagram = dynamic(() =>
  import("react-icons/fa").then((mod) => mod.FaInstagram)
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
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
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
          <div className="text-center">
            <h3 className="text-lg font-semibold mb-4">
              {t("contact.contactUs")}
            </h3>
            <p className="overflow-hidden">
              <strong>{t("contact.email")}:</strong>{" "}
              <a
                href="mailto:volleyboll@ragsvedsif.org"
                className="hover:text-secondary hover:underline"
              >
                volleyboll@ragsvedsif.org
              </a>
            </p>
          </div>
          <address className="text-center not-italic">
            <h3 className="text-lg font-semibold mb-4">
              {t("address.addresses")}
            </h3>
            <p className="mb-2">
              <strong>{t("address.whereWePlay")}:</strong>{" "}
              <a
                href="https://maps.app.goo.gl/ZrUewV9QHQ4Hu6ft9"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-secondary hover:underline"
              >
                Forsgrenska - Medborgarplatsen 4, 118 26 Stockholm, Sweden
              </a>
            </p>
            <p className="mb-2">
              <strong>{t("address.whereWeTrain")}:</strong> <br />
              <strong>{tHeader("men")}:</strong>{" "}
              <a
                href="https://maps.app.goo.gl/fbyc7vCLW5RkDnFJ8"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-secondary hover:underline"
              >
                Bandhagshallen
              </a>
              <br />
              <strong>{tHeader("youth")}:</strong>{" "}
              <a
                href="https://maps.app.goo.gl/Lg7NgRSz9uzEipq27"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-secondary hover:underline"
              >
                Kämpetorpshallen
              </a>
            </p>
          </address>
          <div className="text-center">
            <h3 className="text-lg font-semibold mb-4">
              {t("links.usefulLinks")}
            </h3>
            <ul className="space-y-1">
              <li>
                <a
                  href="https://www.volleyboll.se/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-secondary hover:underline"
                >
                  {t("links.swedishVolleyballFederation")}
                </a>
              </li>
              <li>
                <a
                  href="https://www.xn--rgsvedsif-52a.se/start/?ID=455990"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-secondary hover:underline"
                >
                  {t("links.ragsvedIF")}
                </a>
              </li>
              <li>
                <a
                  href="https://korpenstockholm.zoezi.se/serie/6113"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-secondary hover:underline"
                >
                  {t("links.korpenStockholmVolleyball")}
                </a>
              </li>
              <li>
                <a
                  href="https://www.profixio.com/app/tournaments?klubbid=28248&dateFrom=2024-09-01"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-secondary hover:underline"
                >
                  {t("links.profixio")}
                </a>
              </li>
            </ul>
          </div>
          <div className="text-center">
            <h3 className="text-lg font-semibold mb-4">
              {t("social.followUs")}
            </h3>
            <div className="flex justify-center space-x-4">
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
            </div>
          </div>
        </div>
        <nav aria-label={t("general.footerNavigation")} className="mt-8">
          <ul className="flex flex-wrap justify-center items-center gap-8 text-lg font-bold">
            <li>
              <Link
                href="/#home"
                className="hover:text-secondary hover:underline"
              >
                {tHeader("home")}
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="hover:text-secondary hover:underline"
              >
                {tHeader("about")}
              </Link>
            </li>
            <li>
              <Link
                href="/men-team"
                className="hover:text-secondary hover:underline"
              >
                {tHeader("men")}
              </Link>
            </li>
            <li>
              <Link
                href="/youth-team"
                className="hover:text-secondary hover:underline"
              >
                {tHeader("youth")}
              </Link>
            </li>
            <li>
              <Link
                href="/#news"
                className="hover:text-secondary hover:underline"
              >
                {tHeader("news")}
              </Link>
            </li>
            <li>
              <Link
                href="/#contact"
                className="hover:text-secondary hover:underline"
              >
                {tHeader("contact")}
              </Link>
            </li>
            <LanguageSwitcher />
          </ul>
        </nav>
        <hr className="my-4 border-secondary" />
        <p className="text-center text-sm mb-2 md:mb-0">
          {t("general.copyright", { year: new Date().getFullYear() })}
        </p>
      </div>
      <BackToTopButton />
    </motion.footer>
  );
};

export default Footer;
