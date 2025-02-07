import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import YouthTeamClient from "../../components/YouthTeamClient";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("Youth-Team");

  return {
    title: t("metaTitle"),
    description: t("description"),
    openGraph: {
      title: t("metaTitle"),
      description: t("description"),
      images: [
        {
          url: "https://ragsvedsif-vk.vercel.app/images/youth-team-hero.webp",
          width: 1200,
          height: 630,
          alt: t("alt"),
        },
      ],
    },
  };
}

export default async function YouthTeamPage() {
  return <YouthTeamClient />;
}
