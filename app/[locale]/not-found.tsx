"use client";
import { useLocale, useTranslations } from "next-intl";

import Link from 'next/link'

export default function NotFound() {
  
  const t = useTranslations("NotFound");
  const locale = useLocale();
  
  return (
    <div className="flex flex-col items-center justify-center my-10 md:my-20 xl:my-32">
      <h1 className="text-5xl sm:text-6xl md:text-7xl text-center font-bold mb-8">{t("title")}</h1>
      <p className="text-2xl sm:text-3xl md:text-4xl mb-8">{t("description")}</p>
      <Link href={`/${locale}/`} className="text-secondary text-xl sm:text-2xl md:text-3xl hover:underline">
      {t("backToHome")}
      </Link>
    </div>
  )
}
