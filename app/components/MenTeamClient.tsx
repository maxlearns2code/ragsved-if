import { useLocale, useTranslations } from "next-intl";
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

export default function MenTeamClient() {
  const t = useTranslations("Men-Teams");
  const locale = useLocale();
  const teams: Team[] = t.raw("teams");

  return (
    <section id="teams" className="py-10 px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
        {t("title")}
      </h2>
      <p className="text-lg text-center mb-8">
        <span className="block">{t("description.line1")}</span>
        <span className="block">{t("description.line2")}</span>
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-10 max-w-4xl mx-auto">
        {teams.map((team) => (
          <Link
            href={`/${locale}/lag/${team.id}`}
            key={team.id}
            className="block group relative aspect-w-16 aspect-h-9"
            aria-label={t("teamLinkAriaLabel", { teamName: team.name })}
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
                <h3 className="text-xl font-bold">{team.name}</h3>
              </div>
            </div>
          </Link>
        ))}        
      </div>
      <Link
          href="https://entry.sportadmin.se/groupsOverview?uid=BlleV5&pageId=0&sportid=1075"
          target="_blank"
          rel="noopener noreferrer"
          className="flex m-auto md:w-1/4 mt-8"
        >
          <button aria-label={t("tryoutButton")}>
            {t("tryoutButton")}
          </button>
        </Link>
        <Link
          href="https://www.xn--rgsvedsif-52a.se/kalender/?ID=455991"
          target="_blank"
          rel="noopener noreferrer"
          className="flex m-auto md:w-1/4 mt-8"
        >
          <button aria-label={t("calendarButton")}>
            {t("calendarButton")}
          </button>
        </Link>
    </section>
  );
}
