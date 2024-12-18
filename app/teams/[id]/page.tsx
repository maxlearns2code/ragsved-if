import Image from "next/image";
import { notFound } from "next/navigation";
import data from "../../data/data.json";

type Props = {
  params: Promise<{ id: string }>
}

export default async function TeamPage({ params }: Props) {
  const { id } = await params;
  const team = data.teams.find((t) => t.id === id);

  if (!team) notFound();

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
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
          <div>
            <h2 className="text-2xl font-semibold mb-4">Quick Facts</h2>
            <ul className="space-y-2">
              <li>
                <span className="font-medium">League:</span>{" "}
                <a
                  href={team.championship}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="font-medium text-secondary">
                    {team.league}
                  </span>
                </a>
              </li>
              <li>
                <span className="font-medium">Coach:</span> {team.coach}
              </li>
              <li>
                <span className="font-medium">Captain:</span> {team.captain}
              </li>
              <li>
                <span className="font-medium">Current Rank:</span>{" "}
                {team.currentRank}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
