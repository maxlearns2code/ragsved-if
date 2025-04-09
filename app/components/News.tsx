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

const News = () => {
  const t = useTranslations("News");
  const locale = useLocale();
  const news: NewsProps[] = t.raw("newsPage");

  return (
    <section id="nyheter" className="pt-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">{t("title")}</h2>
        <article className="flex flex-wrap justify-center items-center gap-8">
          {news.map((newsItem) => (
            <Link
              href={`/${locale}/nyheter/${newsItem.id}`}
              key={newsItem.id}
              title={newsItem.title}
              aria-label={newsItem.title}
            >
              <div className="w-full md:w-60 rounded-lg shadow-md flex bg-sec bg-white/10 hover:bg-white/20 transition duration-300 ease-in-out">
                <div className="inset-0 flex flex-col items-start text-white p-4 ">
                  <h3 className="text-xl font-bold">{newsItem.title}</h3>
                  <p className="text-base py-2 px-4 mt-4 border-2 border-white rounded-full">{t("article")}</p>
                </div>
              </div>
            </Link>
          ))}
        </article>
      </div>
    </section>
  );
};

export default News;
