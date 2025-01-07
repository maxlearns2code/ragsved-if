"use client";

import { motion } from "framer-motion";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useMemo, useState } from "react";

interface TitleContent {
  line1: string;
  line2: string;
}

interface Descriptions {
  main: string;
  imageAlt: string;
  buttons: {
    about: string;
    schedule: string;
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

  const imageVariants = useMemo(
    () => ({
      hidden: { opacity: 0, scale: 0.8 },
      visible: {
        opacity: 1,
        scale: 1,
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
      main: t("description"),
      imageAlt: t("imageAlt"),
      buttons: {
        about: t("aboutButton"),
        schedule: t("scheduleButton"),
      },
    }),
    [t]
  );

  const imageProps = useMemo(
    () => ({
      src: "/images/volleyball-game.webp",
      width: 790,
      height: 377,
      layout: "responsive" as const,
      className: `rounded-lg shadow-xl ${
        isImageLoaded ? "opacity-100" : "opacity-0"
      }`,
      priority: true,
      onLoadingComplete: handleImageLoad,
    }),
    [isImageLoaded, handleImageLoad]
  );

  return (
    <section
      id="home"
      className="relative flex items-center overflow-hidden py-10 sm:py-16 md:py-24 lg:py-40 xl:py-48"
    >
      <motion.div
        className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="flex flex-col lg:flex-row items-center w-full">
          <motion.div
            className="w-full lg:w-1/2 xl:pl-5 mb-10 lg:mb-0"
            variants={itemVariants}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold py-2 mb-4 text-white text-center lg:text-left overflow-hidden">
              <motion.span className="block" variants={itemVariants}>
                {titleContent.line1}
              </motion.span>
              <motion.span
                className="block text-secondary"
                variants={itemVariants}
              >
                {titleContent.line2}
              </motion.span>
            </h1>
            <motion.p
              className="my-3 mb-6 md:mb-3 text-base sm:text-lg md:text-xl text-center lg:text-left"
              variants={itemVariants}
            >
              {descriptions.main}
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-3 sm:space-y-0 sm:space-x-4"
              variants={itemVariants}
            >
              <Link href={`/${locale}/about`} className="w-full sm:w-auto">
                <motion.button {...buttonAnimations}>
                  {descriptions.buttons.about}
                </motion.button>
              </Link>
              <Link href={`/${locale}/#schedule`} className="w-full sm:w-auto">
                <motion.button {...buttonAnimations}>
                  {descriptions.buttons.schedule}
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
          <motion.div
            className="w-full lg:w-1/2 flex justify-center items-center"
            variants={imageVariants}
          >
            <div className="relative w-full max-w-md lg:max-w-lg xl:max-w-xl aspect-video">
              <Image alt={descriptions.imageAlt} {...imageProps} />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
