"use client";

import { motion } from "framer-motion";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

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

const buttonAnimations = {
  whileHover: { scale: 1.05 },
  whileTap: { scale: 0.95 },
};

const Hero = () => {
  const tHero = useTranslations("Hero");
  const locale = useLocale();

  const titleContent = {
    line1: tHero("title.line1"),
    line2: tHero("title.line2"),
  };

  const descriptions = {
    main: {
      line1: tHero("description.line1"),
      line2: tHero("description.line2"),
    },
    imageAlt: tHero("imageAlt"),
    buttons: {
      aboutus: tHero("aboutusButton"),
      tryout: tHero("tryoutButton"),
    },
  };

  return (
    <section
      id="hem"
      className="md:min-h-[calc(100vh-76px)] relative flex items-center overflow-hidden"
    >
      <div className="absolute inset-0 -z-10">
        <div className="block md:hidden w-full h-full absolute inset-0">
          <Image
            src="/images/mobile-volleyball-game.webp"
            alt={descriptions.imageAlt}
            fill
            priority
            className="object-cover w-full h-full"
            sizes="(max-width: 768px) 100vw, 600px"
          />
        </div>
        <div className="hidden md:block w-full h-full absolute inset-0">
          <Image
            src="/images/desktop-volleyball-game.webp"
            alt={descriptions.imageAlt}
            fill
            priority
            className="object-cover w-full h-full"
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 bg-black/60 pointer-events-none" />
      </div>

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
              <Link href={`/${locale}/om/`} className="w-full sm:w-auto">
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
