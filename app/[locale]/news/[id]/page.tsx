import { getCanonicalUrl } from "@/utils/metadata";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import {
  FaCalendarAlt,
  FaExternalLinkAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

type Item = {
  id: string;
  title: string;
  description: string;
  date: string;
  location: string;
  linkDescription: string;
  link: string;
  contactDescription: string;
  contact: string;
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
    <article className="max-w-2xl mx-auto my-20 p-4">
      <h1 className="text-2xl font-bold">{article.title}</h1>
      <p className="text-sm lg:text-base flex items-center gap-2 mt-4">
        <FaCalendarAlt className="text-lg" />
        {article.date}
      </p>
      <p className="text-sm lg:text-base flex items-center gap-2 mt-2">
        {" "}
        <FaMapMarkerAlt className="text-lg" />
      </p>
      <p className="mb-4">{article.description}</p>
      <a
        href={article.link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm lg:text-base flex items-center gap-2 mt-2 hover:text-secondary hover:underline"
      >
        <FaExternalLinkAlt className="text-lg" />
        {article.linkDescription}
      </a>
      {article.contactDescription && (
        <p className="mt-2">
          {article.contactDescription}{" "}
          <span className="underline">{article.contact}</span>
        </p>
      )}
    </article>
  );
}
