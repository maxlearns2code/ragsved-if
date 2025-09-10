import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import LanguageSwitcher from "./LanguageSwitcher";

interface AppNavProps {
  navLabel?: string;
  className?: string;
  linkClassName?: string;
  tNamespace?: string;
}

const navItems = [
  { key: "home", href: "#hem" },
  { key: "about", href: "om/" },
  { key: "men", href: "herrlag/" },
  { key: "youth", href: "ungdomslag/" },
  { key: "news", href: "#nyheter" },
  { key: "contact", href: "#kontakt" },
];

export default function AppNav({
  navLabel = "Main navigation",
  className = "",
  linkClassName = "hover:text-secondary hover:underline",
  tNamespace = "Header",
}: AppNavProps) {
  const t = useTranslations(tNamespace);
  const locale = useLocale();

  return (
    <nav aria-label={navLabel}>
      <ul className={`flex flex-wrap items-center justify-center gap-8 text-lg ${className}`}>
        {navItems.map((item) => (
          <li key={item.key}>
            <Link href={`/${locale}/${item.href}`} className={linkClassName}>
              {t(item.key)}
            </Link>
          </li>
        ))}
        <LanguageSwitcher />
      </ul>
    </nav>
  );
}
