"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollDirection, setScrollDirection] = useState("up");

  useEffect(() => {
    let lastScrollY = window.pageYOffset;

    const updateScrollDirection = () => {
      const scrollY = window.pageYOffset;
      const direction = scrollY > lastScrollY ? "down" : "up";
      if (direction !== scrollDirection && (scrollY - lastScrollY > 10 || scrollY - lastScrollY < -10)) {
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
        className={`text-white sticky top-0 z-50 bg-primary shadow-sm shadow-secondary transition-all duration-300 ${
          scrollDirection === "down" && !isMenuOpen
            ? "-translate-y-full"
            : "translate-y-0"
        }`}
      >
        <nav className="container mx-auto px-4 py-3">
          <div className="flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold z-50 relative">
              <Image
                src="/images/logo.png"
                alt="Volleyball Club Logo"
                width={50}
                height={50}
                priority
              />
            </Link>
            <div className="hidden md:block">
              <ul className="flex space-x-4">
                <li><Link href="/#home">Home</Link></li>
                <li><Link href="/#teams">Teams</Link></li>
                <li><Link href="/#schedule">Schedule</Link></li>
                <li><Link href="/#news">News</Link></li>
                <li><Link href="/#contact">Contact</Link></li>
              </ul>
            </div>
            <button
              className="md:hidden z-50 relative text-2xl"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </nav>
      </header>
      {isMenuOpen && (
        <div className="fixed inset-0 bg-primary z-40 flex items-center justify-center md:hidden">
          <ul className="flex flex-col space-y-6 text-center text-2xl">
            <li><Link href="/" onClick={() => setIsMenuOpen(false)}>Home</Link></li>
            <li><Link href="/#teams" onClick={() => setIsMenuOpen(false)}>Teams</Link></li>
            <li><Link href="/#schedule" onClick={() => setIsMenuOpen(false)}>Schedule</Link></li>
            <li><Link href="/#news" onClick={() => setIsMenuOpen(false)}>News</Link></li>
            <li><Link href="/#contact" onClick={() => setIsMenuOpen(false)}>Contact</Link></li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Header;
