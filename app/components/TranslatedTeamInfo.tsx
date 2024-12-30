"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";

type TeamInfoProps = {
  team: {
    league: string;
    championship: string;
    coach: string;
    captain: string;
    currentRank: string;
  };
};

export default function TranslatedTeamInfo({ team }: TeamInfoProps) {
  const t = useTranslations("TeamPage");

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">{t("quickFacts")}</h2>
      <ul className="space-y-2">
        <li>
          <span className="font-medium">{t("league")}:</span>{" "}
          <Link href={team.championship} passHref>
            <button className="w-auto">{team.league}</button>
          </Link>
        </li>
        <li>
          <span className="font-medium">{t("coach")}:</span> {team.coach}
        </li>
        <li>
          <span className="font-medium">{t("captain")}:</span> {team.captain}
        </li>
        <li>
          <span className="font-medium">{t("currentRank")}:</span>{" "}
          {team.currentRank}
        </li>
      </ul>
    </div>
  );
}
