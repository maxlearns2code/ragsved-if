"use client";

import { useTranslations } from "next-intl";

const Sponsor = () => {
  const t = useTranslations("Status");
  return (
    <section className="pt-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">{t("title")}</h2>
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-center">
          {t("description")}
        </p>
      </div>
    </section>
  );
};

export default Sponsor;
