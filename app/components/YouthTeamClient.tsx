"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

export default function YouthTeamClient() {
  const t = useTranslations("Youth-Team");

  return (
    <section className="py-10 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="flex m-auto md:w-1/2"
      >
        <Image
          src="/images/youth-team-hero.webp"
          alt={t("alt")}
          width={1000}
          height={750}
          style={{ width: "100%", height: "auto" }}
          className="rounded-lg shadow-xl"
          priority
        />
      </motion.div>
      <div className="container mx-auto p-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center md:w-2/3 m-auto"
        >
          {t("title")}
        </motion.h2>
        <div className="flex flex-col md:flex-row items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="md:w-1/2"
          >
            <p className="text-lg text-center mt-8">{t("description")}</p>
            <p className="text-lg text-center my-8">{t("joinUs")}</p>
            <p className="text-lg text-center mb-8">{t("registerNow")}</p>
            <Link
              href="https://entry.sportadmin.se/groupsOverview?uid=BlleV5&pageId=0&sportid=1075"
              className="flex m-auto md:w-1/2"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button aria-label={t("registerAriaLabel")}>
                {t("registerButton")}
              </button>
            </Link>
            <Link
              href="https://www.xn--rgsvedsif-52a.se/kalender/?ID=547666"
              target="_blank"
              rel="noopener noreferrer"
              className="flex m-auto md:w-1/2 mt-8"
            >
              <button aria-label={t("calendarButton")}>
                {t("calendarButton")}
              </button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
