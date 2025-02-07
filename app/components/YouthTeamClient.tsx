"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

export default function YouthTeamClient() {
  const t = useTranslations("Youth-Team");

  return (
    <section id="youth-team" className="py-10 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="flex m-auto md:w-1/2"
      >
        <Image
          src="/images/youth-team-hero.webp"
          alt={t("alt")}
          width={1920}
          height={1080}
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
          className="text-3xl md:text-4xl font-bold text-center"
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
            <p className="text-lg text-center my-4">{t("description")}</p>
            <p className="text-lg text-center my-4">{t("joinUs")}</p>
            <Link
              href="https://sportadmin.se/form/form.asp?ID=%7BDB1E1027-C9F3-4BFD-9660-94321E6F3160%7D"
              className="w-full sm:w-auto"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button aria-label={t("registerAriaLabel")}>
                {t("registerButton")}
              </button>
            </Link>
            <p className="text-lg text-center my-4">{t("registerNow")}</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
