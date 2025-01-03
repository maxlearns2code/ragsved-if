"use client";

import { useTranslations } from "next-intl";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";

const FaFacebook = dynamic(() =>
  import("react-icons/fa").then((mod) => mod.FaFacebook)
);
const FaInstagram = dynamic(() =>
  import("react-icons/fa").then((mod) => mod.FaInstagram)
);
const FaTwitter = dynamic(() =>
  import("react-icons/fa").then((mod) => mod.FaTwitter)
);

const Footer = () => {
  const t = useTranslations("Footer");

  return (
    <footer id="contact" className="text-white py-10 md:py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start">
          <div className="mb-4 md:mb-0">
            <Link
              href="/"
              className="text-2xl font-bold"
              aria-label={t("returnToHomepage")}
            >
              <Image
                src="/images/logo.png"
                alt={t("logoAlt")}
                width={50}
                height={50}
                priority
              />
            </Link>
          </div>
          <address className="mb-4 md:mb-0 md:pl-14 text-center not-italic">
            <h3 className="font-semibold mb-2">{t("contactUs")}</h3>
            <p className="text-sm">
              {t("address")}: Trollesundsvägen 47, 124 34 Bandhagen
            </p>
            <p className="text-sm">
              {t("phone")}:{" "}
              <a href="tel:+460707356835" className="hover:underline">
                (+46) 0707356835
              </a>
            </p>
            <p className="text-sm">
              {t("email")}:{" "}
              <a
                href="mailto:volleyboll@ragsvedsif.org"
                className="text-secondary hover:underline"
              >
                volleyboll@ragsvedsif.org
              </a>
            </p>
          </address>
          <div className="text-center">
            <h3 className="font-semibold mb-2">{t("followUs")}</h3>
            <div className="flex justify-center md:justify-end space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t("facebookAriaLabel")}
              >
                <FaFacebook
                  className="text-white w-6 h-6 hover:text-blue-600"
                  aria-hidden="true"
                />
              </a>
              <a
                href="https://www.instagram.com/ragsvedsif_volleybollherr?igsh=NDV4Z2prMWx3cGkw"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t("instagramAriaLabel")}
              >
                <FaInstagram
                  className="text-white w-6 h-6 hover:text-pink-500"
                  aria-hidden="true"
                />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t("twitterAriaLabel")}
              >
                <FaTwitter
                  className="text-white w-6 h-6 hover:text-blue-400"
                  aria-hidden="true"
                />
              </a>
            </div>
          </div>
        </div>
        <hr className="my-4 border-secondary" />
        <p className="text-center text-sm">
          {t("copyright", { year: new Date().getFullYear() })}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
