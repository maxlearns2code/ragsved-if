"use client";

import { useLocale } from "next-intl";
import { useRouter, usePathname } from "next/navigation";
import { useState } from "react";

export default function LanguageSwitcher() {
  const [isOpen, setIsOpen] = useState(false);
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const languages = {
    sv: { name: 'Svenska', flag: 'SE' },
    en: { name: 'English', flag: 'EN' },
    fr: { name: 'Français', flag: 'FR' },
    es: { name: 'Español', flag: 'ES' },
    uk: { name: 'Українська', flag: 'UK' },
    pl: { name: 'Polski', flag: 'PL' }
  };

  const handleLanguageChange = (newLocale: string) => {
    const newPathname = `/${newLocale}${pathname.replace(/^\/[a-z]{2}/, '')}`;
    router.push(newPathname);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        className="flex items-center gap-2 px-3 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="flex items-center gap-2">
          <span>{languages[locale as keyof typeof languages]?.flag}</span>
        </span>
        <span className="text-xs opacity-60">▼</span>
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-2 w-48 bg-white/10 backdrop-blur-lg rounded-lg overflow-hidden z-50 border border-white/20">
          <ul className="divide-y divide-white/10">
            {Object.entries(languages).map(([code, { name, flag }]) => (
              <li
                key={code}
                onClick={() => handleLanguageChange(code)}
                className={`
                  flex items-center gap-3 px-4 py-3 cursor-pointer
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
