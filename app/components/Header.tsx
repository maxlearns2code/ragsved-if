"use client";

import { useTranslations } from "next-intl";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useMemo, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import LanguageSwitcher from "./LanguageSwitcher";

const MobileMenu = dynamic(() => import("./MobileMenu"), { ssr: false });

const Header = () => {
  const t = useTranslations("Header");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollDirection, setScrollDirection] = useState("up");

  const updateScrollDirection = useCallback(() => {
    let lastScrollY = window.scrollY;
    return () => {
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
  }, [scrollDirection]);

  useEffect(() => {
    const updateScroll = updateScrollDirection();
    window.addEventListener("scroll", updateScroll);
    return () => window.removeEventListener("scroll", updateScroll);
  }, [updateScrollDirection]);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "unset";
  }, [isMenuOpen]);

  const navItems = useMemo(
    () => [
      { href: "/#home", label: t("home") },
      { href: "/about", label: t("about") },
      { href: "/#teams", label: t("teams") },
      { href: "/#schedule", label: t("schedule") },
      { href: "/#news", label: t("news") },
      { href: "/#contact", label: t("contact") },
    ],
    [t]
  );

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
              <ul className="flex space-x-4 text-lg">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href}>{item.label}</Link>
                  </li>
                ))}
              </ul>
              <LanguageSwitcher />
            </div>
            <button
              className="md:hidden z-50 relative text-2xl w-auto"
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
        <MobileMenu setIsMenuOpen={setIsMenuOpen} navItems={navItems} />
      )}
    </>
  );
};

export default Header;
