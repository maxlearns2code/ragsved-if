"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useTranslations } from "next-intl";

const sponsors = [
  { name: "Sponsor 1", logo: "/images/sponsors/sponsor1.png" },
  { name: "Sponsor 2", logo: "/images/sponsors/sponsor2.jpg" },
  { name: "Sponsor 3", logo: "/images/sponsors/sponsor3.jpg" },
];

const Sponsor = () => {
  const t = useTranslations("Sponsors");
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">{t("title")}</h2>
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-center mb-8">{t("description")}</p>
        <div className="flex flex-wrap justify-center items-center gap-8">
          {sponsors.map((sponsor, index) => (
            <motion.div
              key={sponsor.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="w-40 h-40 bg-white rounded-lg shadow-md flex items-center justify-center p-4"
            >
              <Image
                src={sponsor.logo}
                alt={sponsor.name}
                width={120}
                height={120}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sponsor;
