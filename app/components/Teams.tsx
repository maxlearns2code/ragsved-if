import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { IoInformationCircleOutline } from "react-icons/io5";

interface Team {
  id: string;
  name: string;
  image: string;
  description: string;
  league: string;
  coach: string;
  captain: string;
  currentRank: string;
  championship: string;
}

export default function Teams() {
  const t = useTranslations("Teams");
  const teams: Team[] = t.raw("teams");

  return (
    <section id="teams" className="py-8 md:py-20 px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
        {t("title")}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-10 max-w-4xl mx-auto">
        {teams.map((team) => (
          <Link
            href={`/teams/${team.id}`}
            key={team.id}
            className="block group relative aspect-w-16 aspect-h-9"
          >
            <div className="overflow-hidden rounded-lg shadow-lg transition duration-300 ease-in-out transform group-hover:scale-105 h-full">
              <Image
                src={team.image}
                alt={team.name}
                width={1071}
                height={1068}
                style={{ width: "100%", height: "100%" }}
                className="rounded-lg shadow-xl"
                loading="lazy"
              />
              <div className="absolute inset-0 flex items-end justify-end p-4">
                <IoInformationCircleOutline className="text-primary text-3xl" />
              </div>
              <div className="absolute inset-0 flex flex-col items-start justify-end p-4 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-white text-xl font-bold">{team.name}</h3>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
