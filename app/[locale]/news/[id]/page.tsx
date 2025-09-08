import NewsArticle from "@/app/components/NewsArticle";
import { getCanonicalUrl } from "@/utils/metadata";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";

type Item = {
  id: string;
  icon: string;
  title: string;
  description: string;
  date: string;
  location: string;
  locationUrl?: string;
  locationLinkDescription?: string;
  linkDescription: string;
  link: string;
};

type Props = {
  params: Promise<{ id: string; locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id, locale } = await params;
  const t = await getTranslations({ locale, namespace: "News" });
  const tbis = await getTranslations({ locale, namespace: "Metadata" });
  const items: Item[] = t.raw("newsPage");
  const article = items.find((item: Item) => item.id === id);

  if (!article) {
    return {
      title: `New Not Found - ${tbis("siteName")}`,
      description: tbis("description"),
      metadataBase: new URL("https://vb.xn--rgsvedsif-52a.se"),
    };
  }

  const siteUrl = "https://vb.xn--rgsvedsif-52a.se";
  const canonicalUrl = getCanonicalUrl(`/${locale}/news/${id}`);

  const languages = {
    sv: getCanonicalUrl(`/sv/teams/${id}`),
    en: getCanonicalUrl(`/en/teams/${id}`),
    es: getCanonicalUrl(`/es/teams/${id}`),
    fr: getCanonicalUrl(`/fr/teams/${id}`),
    de: getCanonicalUrl(`/de/teams/${id}`),
    sr: getCanonicalUrl(`/sr/teams/${id}`),
    uk: getCanonicalUrl(`/uk/teams/${id}`),
    pl: getCanonicalUrl(`/pl/teams/${id}`),
    pt: getCanonicalUrl(`/pt/teams/${id}`),
    "x-default": getCanonicalUrl(`/sv/teams/${id}`),
  };
  return {
    title: article.title,
    description: article.description,
    alternates: {
      canonical: canonicalUrl,
      languages,
    },
    openGraph: {
      title: article.title,
      description: article.description,
      url: `${siteUrl}/${locale}/news/${id}`,
    },
  };
}

export default async function NewsArticlePage({ params }: Props) {
  const { id, locale } = await params;
  const t = await getTranslations({ locale, namespace: "News" });
  const items: Item[] = t.raw("newsPage");
  const article = items.find((item: Item) => item.id === id);

  if (!article) notFound();

  return (
    <article className="max-w-3xl mx-auto my-20">
      <h1 className="text-3xl font-bold text-center mb-8">{t("title")}</h1>
      <NewsArticle article={article} />
    </article>
  );
}
