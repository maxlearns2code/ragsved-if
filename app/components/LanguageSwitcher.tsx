"use client";

import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { FaGlobe, FaChevronDown } from "react-icons/fa";

export default function LanguageSwitcher() {
  const [isOpen, setIsOpen] = useState(false);
  const locale = useLocale();
  const router = useRouter();
  const dropdownRef = useRef<HTMLDivElement>(null);

  const languages = {
    sv: { name: "Svenska", flag: "SE" },
    en: { name: "English", flag: "EN" },
    es: { name: "Español", flag: "ES" },
    fr: { name: "Français", flag: "FR" },
    de: { name: "Deutsch", flag: "DE" },
    sr: { name: "Српски", flag: "RS" },
    uk: { name: "Українська", flag: "UK" },
    pl: { name: "Polski", flag: "PL" },
    pt: { name: "Portuguese", flag: "PT" },
  };

  const handleLanguageChange = (newLocale: string) => {
    const currentPath = window.location.pathname;
    const newPath = currentPath.replace(/^\/[a-z]{2}/, `/${newLocale}`);
    router.push(newPath);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 bg-primary hover:bg-primary p-1"
      >
        <FaGlobe className="text-2xl hover:text-secondary hover:scale-105 transition-colors duration-300" />
        <FaChevronDown className="text-xs opacity-60" />
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-2 w-full sm:w-48 bg-white/10 backdrop-blur-lg rounded-lg overflow-hidden z-50 border border-white/20">
          <ul className="divide-y divide-white/10 max-h-24 overflow-y-auto scrollbar-thin scrollbar-thumb-white/30 scrollbar-track-transparent">
            {Object.entries(languages).map(([code, { name, flag }]) => (
              <li
                key={code}
                onClick={() => handleLanguageChange(code)}
                className={`
                  flex items-center justify-center md:justify-start gap-3 px-4 py-3 cursor-pointer
                  ${locale === code ? "bg-white/10" : "hover:bg-white/5"}
                  transition-colors
                `}
              >
                <span className="text-lg">{flag}</span>
                <span className="text-white/90">{name}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
