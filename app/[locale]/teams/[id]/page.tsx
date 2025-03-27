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

type PageProps = {
  params: Promise<{ id: string; locale: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { id, locale } = await params;
  const t = await getTranslations({ locale, namespace: "Men-Teams" });
  const teams: Team[] = t.raw("teams");
  const team = teams.find((team: Team) => team.id === id);

  if (!team) return {};

  const siteUrl = "https://vb.xn--rgsvedsif-52a.se";
  const canonicalUrl = `${siteUrl}/${locale}/teams/${id}`;

  return {
    title: `${team.name} - ${t("metaTitle", { default: "Team Info" })}`,
    description: team.description,
    openGraph: {
      title: `${team.name} - ${t("metaTitle", { default: "Team Info" })}`,
      description: team.description,
      images: [
        {
          url: team.image,
          width: 1071,
          height: 1068,
          alt: team.name,
        },
      ],
    },
    alternates: {
      canonical: canonicalUrl,
    },
  };
}

export default async function TeamPage({ params }: PageProps) {
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
