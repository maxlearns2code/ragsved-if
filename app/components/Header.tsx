"use client";

import { useLocale, useTranslations } from "next-intl";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { FaBars, FaInstagram, FaTimes } from "react-icons/fa";
import LanguageSwitcher from "./LanguageSwitcher";

const MobileMenu = dynamic(() => import("./MobileMenu"), { ssr: false });

const Header = () => {
  const t = useTranslations("Header");
  const tFooter = useTranslations("Footer");
  const locale = useLocale();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollDirection, setScrollDirection] = useState<"up" | "down">("up");

  const lastScrollY = useRef(0);
  const ticking = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!ticking.current) {
        window.requestAnimationFrame(() => {
          const scrollY = window.scrollY;
          const direction = scrollY > lastScrollY.current ? "down" : "up";
          if (
            direction !== scrollDirection &&
            Math.abs(scrollY - lastScrollY.current) > 10
          ) {
            setScrollDirection(direction as "up" | "down");
          }
          lastScrollY.current = scrollY > 0 ? scrollY : 0;
          ticking.current = false;
        });
        ticking.current = true;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollDirection]);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "unset";
  }, [isMenuOpen]);

  return (
    <>
      <header
        className={`sticky top-0 z-50 bg-primary shadow-sm shadow-secondary transition-all duration-500 ${
          scrollDirection === "down" && !isMenuOpen
            ? "-translate-y-full"
            : "translate-y-0"
        }`}
      >
        <nav
          className="container mx-auto px-4 py-3 md:py-4"
          role="navigation"
          aria-label={t("mainNavigationAriaLabel")}
        >
          <div className="flex justify-between items-center">
            <Link
              href={`/${locale}`}
              className="text-2xl font-bold z-50 relative flex items-center"
              aria-label={t("homeAriaLabel")}
            >
              <Image
                src="/images/logo.png"
                alt={t("logoAlt")}
                width={50}
                height={50}
                priority
              />
              <span className="ml-2 text-xl font-semibold">
                {t("clubName")}
              </span>
            </Link>
            <div className="hidden md:flex md:items-center md:space-x-4">
              <ul className="flex space-x-4 text-lg">
                <li>
                  <Link href={`/${locale}/#hem`}>{t("home")}</Link>
                </li>
                <li>
                  <Link href={`/${locale}/om/`}>{t("about")}</Link>
                </li>
                <li>
                  <Link href={`/${locale}/herrlag/`}>{t("men")}</Link>
                </li>
                <li>
                  <Link href={`/${locale}/ungdomslag/`}>{t("youth")}</Link>
                </li>
                <li>
                  <Link href={`/${locale}/#nyheter`}>{t("news")}</Link>
                </li>
                <li>
                  <Link href={`/${locale}/#kontakt`}>{t("contact")}</Link>
                </li>
              </ul>
              <a
                href="https://www.instagram.com/ragsvedsifvolleyboll/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={tFooter("social.instagramAriaLabel")}
                className="hover:text-secondary transition-colors duration-300"
              >
                <FaInstagram aria-hidden="true" size={27} className="hover:scale-105"/>
              </a>
              <LanguageSwitcher />
            </div>
            <button
              className="md:hidden z-50 relative text-xl w-auto"
              onClick={() => setIsMenuOpen((open) => !open)}
              aria-label={
                isMenuOpen ? t("closeMenuAriaLabel") : t("openMenuAriaLabel")
              }
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? (
                <FaTimes aria-hidden="true" />
              ) : (
                <FaBars aria-hidden="true" />
              )}
            </button>
          </div>
        </nav>
      </header>
      {isMenuOpen && <MobileMenu setIsMenuOpen={setIsMenuOpen} />}
    </>
  );
};

export default Header;
