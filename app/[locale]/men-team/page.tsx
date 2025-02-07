import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import MenTeamClient from "../../components/MenTeamClient";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("Men-Teams");
  const fullDescription = `${t("description.line1")} ${t(
    "description.line2"
  )} ${t("description.line3")}`;

  return {
    title: t("metaTitle"),
    description: fullDescription,
    openGraph: {
      title: t("metaTitle"),
      description: fullDescription,
    },
  };
}

export default async function MenTeamPage() {
  return <MenTeamClient />;
}
