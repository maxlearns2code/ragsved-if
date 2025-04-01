"use client";

import { motion } from "framer-motion";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import { useCallback, useMemo, useState } from "react";

interface TitleContent {
  line1: string;
  line2: string;
}

interface Descriptions {
  main: {
    line1: string;
    line2: string;
  };
  imageAlt: string;
  buttons: {
    aboutus: string;
    tryout: string;
  };
}

const Hero = () => {
  const t = useTranslations("Hero");
  const locale = useLocale();
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  const handleImageLoad = useCallback(() => {
    setIsImageLoaded(true);
  }, []);

  const containerVariants = useMemo(
    () => ({
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          delayChildren: 0.3,
          staggerChildren: 0.2,
        },
      },
    }),
    []
  );

  const itemVariants = useMemo(
    () => ({
      hidden: { opacity: 0, x: "-50px" },
      visible: {
        opacity: 1,
        x: 0,
        transition: {
          duration: 0.6,
          ease: "easeOut",
        },
      },
    }),
    []
  );

  const buttonAnimations = useMemo(
    () => ({
      whileHover: { scale: 1.05 },
      whileTap: { scale: 0.95 },
    }),
    []
  );

  const titleContent: TitleContent = useMemo(
    () => ({
      line1: t("title.line1"),
      line2: t("title.line2"),
    }),
    [t]
  );

  const descriptions: Descriptions = useMemo(
    () => ({
      main: {
        line1: t("description.line1"),
        line2: t("description.line2"),
      },
      imageAlt: t("imageAlt"),
      buttons: {
        aboutus: t("aboutusButton"),
        tryout: t("tryoutButton"),
      },
    }),
    [t]
  );

  const imageProps = useMemo(
    () => ({
      mobile: {
        src: "/images/mobile-volleyball-game.webp",
        width: 600,
        height: 800,
      },
      desktop: {
        src: "/images/desktop-volleyball-game.webp",
        width: 1920,
        height: 1542,
      },
      style: { width: "100%", height: "auto" },
      className: `rounded-lg shadow-xl ${
        isImageLoaded ? "opacity-100" : "opacity-0"
      }`,
      priority: true,
      onLoad: handleImageLoad,
    }),
    [isImageLoaded, handleImageLoad]
  );

  return (
    <section
      id="hem"
      className="md:min-h-[calc(100vh-76px)] relative flex items-center overflow-hidden bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('${imageProps.mobile.src}')`,
      }}
    >
      <div
        className="absolute inset-0 bg-cover bg-center hidden lg:block"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.6)), url('${imageProps.desktop.src}')`,
        }}
      ></div>
      <motion.div
        className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="flex flex-col lg:flex-row items-center w-full">
          <motion.div className="w-full my-20 lg:my-0" variants={itemVariants}>
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-7xl font-extrabold text-center overflow-hidden">
              <motion.span className="block pb-6" variants={itemVariants}>
                {titleContent.line1}
              </motion.span>
              <motion.span
                className="block text-secondary pb-6"
                variants={itemVariants}
              >
                {titleContent.line2}
              </motion.span>
            </h1>
            <motion.p
              className="my-6 text-base sm:text-lg md:text-xl lg:text-2xl text-center"
              variants={itemVariants}
            >
              <span className="block">{descriptions.main.line1}</span>
              <span className="block">{descriptions.main.line2}</span>
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row justify-center space-y-3 sm:space-y-0 sm:space-x-5"
              variants={itemVariants}
            >
              <Link href={`/${locale}/om`} className="w-full sm:w-auto">
                <motion.button
                  {...buttonAnimations}
                  className="bg-primary"
                  aria-label={descriptions.buttons.aboutus}
                >
                  {descriptions.buttons.aboutus}
                </motion.button>
              </Link>
              <Link
                href="https://entry.sportadmin.se/groupsOverview?uid=BlleV5&pageId=0&sportid=1075"
                className="w-full sm:w-auto"
                target="_blank"
                rel="noopener noreferrer"
              >
                <motion.button
                  {...buttonAnimations}
                  className="bg-primary"
                  aria-label={descriptions.buttons.tryout}
                >
                  {descriptions.buttons.tryout}
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
