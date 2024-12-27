"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import LanguageSwitcher from "./LanguageSwitcher";

const Header = () => {
  const t = useTranslations("Header");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollDirection, setScrollDirection] = useState("up");

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const updateScrollDirection = () => {
      const scrollY = window.scrollY;
      const direction = scrollY > lastScrollY ? "down" : "up";
      if (
        direction !== scrollDirection &&
        (scrollY - lastScrollY > 10 || scrollY - lastScrollY < -10)
      ) {
        setScrollDirection(direction);
      }
      lastScrollY = scrollY > 0 ? scrollY : 0;
    };

    window.addEventListener("scroll", updateScrollDirection);

    return () => {
      window.removeEventListener("scroll", updateScrollDirection);
    };
  }, [scrollDirection]);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMenuOpen]);

  return (
    <>
      <header
        className={`text-white sticky top-0 z-50 bg-primary shadow-sm shadow-secondary transition-all duration-500 ${
          scrollDirection === "down" && !isMenuOpen
            ? "-translate-y-full"
            : "translate-y-0"
        }`}
      >
        <nav className="container mx-auto px-4 py-3">
          <div className="flex justify-between items-center">
            <Link
              href="/"
              className="text-2xl font-bold z-50 relative"
              aria-label={t("homeAriaLabel")}
            >
              <Image
                src="/images/logo.png"
                alt={t("logoAlt")}
                width={50}
                height={50}
                priority
              />
            </Link>
            <div className="hidden md:flex md:items-center md:space-x-4">
              <ul className="flex space-x-4">
                <li>
                  <Link href="/#home">{t("home")}</Link>
                </li>
                <li>
                  <Link href="/#about">{t("about")}</Link>
                </li>
                <li>
                  <Link href="/#teams">{t("teams")}</Link>
                </li>
                <li>
                  <Link href="/#schedule">{t("schedule")}</Link>
                </li>
                <li>
                  <Link href="/#news">{t("news")}</Link>
                </li>
                <li>
                  <Link href="/#contact">{t("contact")}</Link>
                </li>
              </ul>

              <LanguageSwitcher />
            </div>
            <button
              className="md:hidden z-50 relative text-2xl"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
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
      {isMenuOpen && (
        <div className="fixed inset-0 bg-primary z-40 flex flex-col items-center justify-center md:hidden">
          <ul className="flex flex-col space-y-4 text-center text-2xl">
            <li>
              <Link href="/" onClick={() => setIsMenuOpen(false)}>
                {t("home")}
              </Link>
            </li>
            <li>
              <Link href="/#about" onClick={() => setIsMenuOpen(false)}>
                {t("about")}
              </Link>
            </li>
            <li>
              <Link href="/#teams" onClick={() => setIsMenuOpen(false)}>
                {t("teams")}
              </Link>
            </li>
            <li>
              <Link href="/#schedule" onClick={() => setIsMenuOpen(false)}>
                {t("schedule")}
              </Link>
            </li>
            <li>
              <Link href="/#news" onClick={() => setIsMenuOpen(false)}>
                {t("news")}
              </Link>
            </li>
            <li>
              <Link href="/#contact" onClick={() => setIsMenuOpen(false)}>
                {t("contact")}
              </Link>
            </li>
          </ul>

          <div className="w-full px-4 mt-4">
            <LanguageSwitcher />
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
