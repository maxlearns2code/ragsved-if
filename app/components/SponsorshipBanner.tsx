"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { useMemo } from "react";
import { FaVolleyballBall } from "react-icons/fa";

const Banner = () => {
  const t = useTranslations("Banner");

  const ballVariants = useMemo(
    () => ({
      initial: { opacity: 0, x: "-20vw", y: 0, rotate: 0 },
      animate: (i: number) => ({
        opacity: 1,
        x: ["-20vw", "120vw"],
        y: [0, -25, 0],
        rotate: [0, 360],
        transition: {
          opacity: { duration: 0.5, delay: 0.5 + i * 0.1 },
          x: {
            repeat: Infinity,
            duration: 20,
            ease: "linear",
            delay: 1 + i * 4,
          },
          y: {
            repeat: Infinity,
            duration: 1.5,
            ease: "easeInOut",
            delay: 1 + i * 0.4,
          },
          rotate: {
            repeat: Infinity,
            duration: 2.5,
            ease: "linear",
            delay: 1 + i * 0.4,
          },
        },
      }),
    }),
    []
  );

  const balls = useMemo(
    () =>
      [...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute top-1/2 -translate-y-1/2"
          custom={i}
          variants={ballVariants}
          initial="initial"
          animate="animate"
        >
          <FaVolleyballBall size={40} />
        </motion.div>
      )),
    [ballVariants]
  );

  return (
    <div className="flex justify-center">
      <Link href="mailto:volleyboll@ragsvedsif.org" className="w-full">
        <motion.div
          className="bg-secondary py-6 px-8 relative overflow-hidden cursor-pointer group"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex justify-between items-center relative z-10">
            <p className="textbase md:text-lg lg:text-xl font-bold text-primary transition-all duration-300 group-hover:text-tertiary">
              {t("message")}
            </p>
            <p className="text-base md:text-lg lg:text-xl font-bold text-primary transition-all duration-300 group-hover:text-tertiary">
              {t("callToAction")}
            </p>
          </div>

          <div className="absolute inset-0 overflow-hidden">{balls}</div>

          <motion.div className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
        </motion.div>
      </Link>
    </div>
  );
};

export default Banner;
