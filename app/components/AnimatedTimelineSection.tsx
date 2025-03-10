"use client";

import { motion, useAnimation, Variants } from "framer-motion";
import { useTranslations } from "next-intl";
import { useCallback, useEffect } from "react";
import { useInView } from "react-intersection-observer";

interface AnimatedTimelineSectionProps {
  section: string;
  index: number;
  locale: string;
}

const containerVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.2,
      duration: 0.6,
    },
  },
  exit: {
    opacity: 0,
    y: -50,
    transition: {
      duration: 0.6,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const AnimatedTimelineSection: React.FC<AnimatedTimelineSectionProps> = ({
  section,
  index,
  locale
}) => {
  const t = useTranslations("AboutUs.sections");
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  const startAnimation = useCallback(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  useEffect(() => {
    startAnimation();
  }, [startAnimation]);

  const isRight = index % 2 !== 0;

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={controls}
      exit="exit"
      className={`flex items-center w-full mb-4 md:-mb-8 ${
        isRight ? "md:justify-end" : "md:justify-start"
      }`}
      lang={locale}
    >
      <motion.div
        className={`w-full md:w-5/12 bg-white/10 p-4 rounded-lg shadow-lg ${
          isRight ? "md:ml-4" : "md:mr-4"
        }`}
      >
        <motion.h3
          className="text-xl font-bold text-secondary mb-2"
          variants={itemVariants}
        >
          {t(`${section}.title`)}
        </motion.h3>
        <motion.p className="text-sm" variants={itemVariants}>
          {t(`${section}.content`)}
        </motion.p>
      </motion.div>
    </motion.div>
  );
};

export default AnimatedTimelineSection;
