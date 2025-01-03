"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { useMemo } from "react";

const Hero = () => {
  const t = useTranslations("Hero");

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
                {t("title.line1")}
              </motion.span>
              <motion.span
                className="block text-secondary"
                variants={itemVariants}
              >
                {t("title.line2")}
              </motion.span>
            </h1>
            <motion.p
              className="my-3 mb-6 md:mb-3 text-base sm:text-lg md:text-xl text-center lg:text-left"
              variants={itemVariants}
            >
              {t("description")}
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-3 sm:space-y-0 sm:space-x-4"
              variants={itemVariants}
            >
              <Link href={`/about`} className="w-full sm:w-auto">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {t("aboutButton")}
                </motion.button>
              </Link>
              <Link href="/#schedule" className="w-full sm:w-auto">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {t("scheduleButton")}
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
          <motion.div
            className="w-full lg:w-1/2 flex justify-center items-center"
            variants={imageVariants}
          >
            <div className="relative w-full max-w-md lg:max-w-lg xl:max-w-xl aspect-video">
              <Image
                src="/images/volleyball-game.webp"
                alt={t("imageAlt")}
                width={790}
                height={377}
                layout="responsive"
                className="rounded-lg shadow-xl"
                priority
              />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
