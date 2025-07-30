import { motion } from "framer-motion";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import React from "react";
import { FaInstagram } from "react-icons/fa";
import LanguageSwitcher from "./LanguageSwitcher";

interface MobileMenuProps {
  setIsMenuOpen: (isOpen: boolean) => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ setIsMenuOpen }) => {
  const tHeader = useTranslations("Header");
  const tFooter = useTranslations("Footer");
  const locale = useLocale();

  const navItems = [
    { href: `/${locale}/#home`, label: tHeader("home") },
    { href: `/${locale}/about`, label: tHeader("about") },
    { href: `/${locale}/men-team`, label: tHeader("men") },
    { href: `/${locale}/youth-team`, label: tHeader("youth") },
    { href: `/${locale}/#news`, label: tHeader("news") },
    { href: `/${locale}/#contact`, label: tHeader("contact") },
  ];

  const menuVariants = {
    closed: { opacity: 0, x: "-100%" },
    open: { opacity: 1, x: 0 },
  };

  const linkVariants = {
    closed: { opacity: 0, y: 20 },
    open: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      className="fixed inset-0 bg-primary z-40 flex flex-col items-center justify-center"
      initial="closed"
      animate="open"
      exit="closed"
      variants={menuVariants}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      <ul className="flex flex-col space-y-4 text-center text-2xl">
        {navItems.map((item, index) => (
          <motion.li
            key={item.href}
            variants={linkVariants}
            transition={{ delay: 0.1 * index }}
          >
            <Link href={item.href} onClick={() => setIsMenuOpen(false)}>
              {item.label}
            </Link>
          </motion.li>
        ))}
        <motion.li
          variants={linkVariants}
          transition={{ delay: 0.1 * navItems.length }}
        >
          <a
            href="https://www.instagram.com/ragsvedsifvolleyboll/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={tFooter("social.instagramAriaLabel")}
            className="flex items-center justify-center space-x-2 text-4xl hover:text-secondary transition-colors duration-300"
            onClick={() => setIsMenuOpen(false)}
          >
            <FaInstagram aria-hidden="true" />
          </a>
        </motion.li>
      </ul>
      <motion.div
        className="w-full px-4 mt-8"
        variants={linkVariants}
        transition={{ delay: 0.1 * (navItems.length + 1) }}
      >
        <LanguageSwitcher />
      </motion.div>
    </motion.div>
  );
};

export default MobileMenu;
