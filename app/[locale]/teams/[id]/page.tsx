import { getTranslations } from "next-intl/server";
import Image from "next/image";
import { notFound } from "next/navigation";
import TranslatedTeamInfo from "../../../components/TranslatedTeamInfo";

type Team = {
  id: string;
  name: string;
  image: string;
  description: string;
  league: string;
  coach: string;
  captain: string;
  currentRank: string;
  championship: string;
};

type PageProps = {
  params: Promise<{ id: string; locale: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export async function generateMetadata({ params }: PageProps) {
  const { id } = await params;
  const t = await getTranslations("Teams");
  const teams: Team[] = t.raw("teams");
  const team = teams.find((team: Team) => team.id === id);

  if (!team) return {};

  return {
    title: `${team.name} - ${t("metaTitle", { default: "Team Info" })}`,
    description: team.description,
  };
}

export default async function TeamPage({ params }: PageProps) {
  const { id } = await params;
  const t = await getTranslations("Teams");
  const teams: Team[] = t.raw("teams");
  const team = teams.find((team: Team) => team.id === id);

  if (!team) notFound();

  return <ClientTeamPage team={team} />;
}

function ClientTeamPage({ team }: { team: Team }) {
  return (
    <div className="flex flex-col justify-center max-w-4xl mx-auto px-4 pt-8 min-h-screen">
      <h1 className="text-4xl font-bold mb-6">{team.name}</h1>
      <div className="flex flex-col md:flex-row gap-8 mb-8">
        <div className="w-full md:w-1/2">
          <Image
            src={team.image}
            alt={team.name}
            width={1071}
            height={1068}
            className="rounded-lg shadow-xl"
          />
        </div>
        <div className="w-full md:w-1/2">
          <p className="text-lg mb-6">{team.description}</p>
          <TranslatedTeamInfo team={team} />
        </div>
      </div>
    </div>
  );
}
