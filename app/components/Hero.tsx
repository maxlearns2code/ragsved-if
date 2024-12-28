"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  const t = useTranslations("Hero");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: "-50px" },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="home"
      className="relative py-4 md:py-20 flex items-center overflow-hidden"
    >
      <motion.div
        className="container mx-auto px-4 sm:px-6 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="flex flex-col lg:flex-row items-center">
          <motion.div
            className="w-full lg:w-1/2 lg:pr-10"
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
              className="mt-3 text-base sm:text-lg md:text-xl mb-8 text-center lg:text-left"
              variants={itemVariants}
            >
              {t("description")}
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-3 sm:space-y-0 sm:space-x-4"
              variants={itemVariants}
            >
              <Link href="/#contact" passHref>
                <button className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-bold rounded-md text-tertiary hover:text-secondary bg-secondary hover:bg-tertiary transition duration-300 ease-in-out w-full sm:w-auto hover:scale-105">
                  {t("joinButton")}
                </button>
              </Link>
              <Link href="/#schedule" passHref>
                <button className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-bold rounded-md text-tertiary hover:text-secondary bg-secondary hover:bg-tertiary transition duration-300 ease-in-out w-full sm:w-auto hover:scale-105">
                  {t("scheduleButton")}
                </button>
              </Link>
            </motion.div>
          </motion.div>
          <motion.div
            className="w-full lg:w-1/2 mt-10 lg:mt-0 flex justify-center items-center"
            variants={imageVariants}
          >
            <div className="relative w-full max-w-md lg:max-w-lg xl:max-w-xl">
              <Image
                src="/images/volleyball-game.webp"
                alt={t("imageAlt")}
                width={790}
                height={377}
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
