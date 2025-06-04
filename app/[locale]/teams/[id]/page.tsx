import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import Image from "next/image";
import { notFound } from "next/navigation";
import MenTeamInfo from "../../../components/MenTeamInfo";
import TeamLogoScroll from "../../../components/TeamLogoScroll";

type Team = {
  id: string;
  name: string;
  image: string;
  description: string;
  league: string;
  championship: string;
  coach: string;
  captain: string;
  currentRank: string;
};

type Props = {
  params: Promise<{ id: string; locale: string }>;
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string; locale: string }>;
}): Promise<Metadata> {
  const { id, locale } = await params;
  const t = await getTranslations({ locale, namespace: "Men-Teams" });
  const tbis = await getTranslations({ locale, namespace: "Metadata" });
  const teams: Team[] = t.raw("teams");
  const team = teams.find((team: Team) => team.id === id);

  if (!team) {
    return {
      title: `Team Not Found - ${tbis("siteName")}`,
      description: tbis("description"),
      metadataBase: new URL("https://vb.xn--rgsvedsif-52a.se"),
    };
  }

  const siteUrl = "https://vb.xn--rgsvedsif-52a.se";
  const path = `/teams/${id}`;
  const canonicalUrl = `${siteUrl}/${locale}${path}`;

  const languages = {
    sv: `${siteUrl}/sv${path}`,
    en: `${siteUrl}/en${path}`,
    es: `${siteUrl}/es${path}`,
    fr: `${siteUrl}/fr${path}`,
    de: `${siteUrl}/de${path}`,
    sr: `${siteUrl}/sr${path}`,
    uk: `${siteUrl}/uk${path}`,
    pl: `${siteUrl}/pl${path}`,
    "x-default": `${siteUrl}/sv${path}`,
  };

  return {
    title: `${team.name} - ${t("metaTitle", { default: "Team Info" })}`,
    description: team.description,
    openGraph: {
      title: `${team.name} - ${t("metaTitle", { default: "Team Info" })}`,
      description: team.description,
      images: [
        {
          url: team.image.startsWith("http")
            ? team.image
            : `${siteUrl}${team.image}`,
          width: 1071,
          height: 1068,
          alt: team.name,
        },
      ],
    },
    alternates: {
      canonical: canonicalUrl,
      languages,
    },
    metadataBase: new URL("https://vb.xn--rgsvedsif-52a.se"),
    applicationName: tbis("siteName"),
    formatDetection: {
      telephone: false,
    },
    verification: {
      google: "1PPKwq_85isgCLYGs8Rfw9m4bcsg9uAnVD6CEUjuc",
    },
  };
}

export default async function TeamPage({ params }: Props) {
  const { id, locale } = await params;
  const t = await getTranslations({ locale, namespace: "Men-Teams" });
  const teams: Team[] = t.raw("teams");
  const team = teams.find((team: Team) => team.id === id);

  if (!team) notFound();

  return <ClientTeamPage team={team} />;
}

function ClientTeamPage({ team }: { team: Team }) {
  return (
    <div className="py-10 lg:py-16">
      <section className="flex flex-col justify-center max-w-4xl mx-auto px-4 ">
        <h1 className="text-4xl font-bold mb-6">{team.name}</h1>
        <div className="flex flex-col md:flex-row gap-8 mb-8">
          <div className="w-full md:w-1/2">
            <Image
              src={team.image}
              alt={team.name}
              width={1071}
              height={1068}
              className="rounded-lg shadow-xl"
              priority
            />
          </div>
          <div className="w-full md:w-1/2 flex flex-col justify-center">
            <MenTeamInfo team={team} />
          </div>
        </div>
      </section>
      <TeamLogoScroll />
    </div>
  );
}
