"use client";

import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

interface NewsProps {
  id: string;
  title: string;
  description: string;
  date: string;
  location: string;
  linkDescription: string;
  link: string;
  contactDescription: string;
  contact: string;
}

const ITEMS_PER_PAGE = 3;

const NewsCarousel = () => {
  const t = useTranslations("News");
  const locale = useLocale();
  const news: NewsProps[] = [...t.raw("newsPage")].reverse();

  const [startIndex, setStartIndex] = useState(0);

  const visibleNews = news.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const handlePrev = () => {
    setStartIndex((prev) => Math.max(0, prev - ITEMS_PER_PAGE));
  };
  const handleNext = () => {
    setStartIndex((prev) =>
      Math.min(news.length - ITEMS_PER_PAGE, prev + ITEMS_PER_PAGE)
    );
  };

  const isPrevDisabled = startIndex === 0;
  const isNextDisabled = startIndex + ITEMS_PER_PAGE >= news.length;

  return (
    <section id="nyheter" className="pt-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">{t("title")}</h2>
        <article className="flex justify-center items-center gap-8">
          {visibleNews.map((newsItem) => (
            <Link
              href={`/${locale}/nyheter/${newsItem.id}/`}
              key={newsItem.id}
              title={newsItem.title}
              aria-label={newsItem.title}
              className="w-64"
            >
              <div
                className={`rounded-lg shadow-md bg-sec bg-white/10 hover:bg-white/20 transition duration-300 ease-in-out h-32 flex items-center justify-center`}
              >
                <h3 className="text-lg font-bold text-white text-center">
                  {newsItem.title}
                </h3>
              </div>
            </Link>
          ))}
        </article>
        <div className="flex justify-center gap-8 mt-4">
          <button
            className={`p-2 w-10 disabled:opacity-30`}
            onClick={handlePrev}
            disabled={isPrevDisabled}
            aria-label="Previous"
          >
            <FaChevronLeft size={16} />
          </button>
          <button
            className={`p-2 w-10 disabled:opacity-30`}
            onClick={handleNext}
            disabled={isNextDisabled}
            aria-label="Next"
          >
            <FaChevronRight size={16} />
          </button>
        </div>
        <Link
          href={`/${locale}/nyheter/`}
          className="block text-center mt-4 text-base text-white hover:underline hover:text-secondary transition"
        >
          {t("SeeAllNews") || "See all news"}
        </Link>
      </div>
    </section>
  );
};

export default NewsCarousel;
