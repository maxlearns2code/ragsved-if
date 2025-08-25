"use client";

import NewsArticle from "@/app/components/NewsArticle";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";

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

const NewsHub = () => {
  const t = useTranslations("News");
  const locale = useLocale();
  const news: NewsProps[] = t.raw("newsPage");

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-8">{t("title")}</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {news.map((newsItem) => (
            <Link
              href={`/${locale}/news/${newsItem.id}`}
              key={newsItem.id}
              title={newsItem.title}
              aria-label={newsItem.title}
              className="block"
            >
              <NewsArticle article={newsItem} showExternalLink={false} />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsHub;
