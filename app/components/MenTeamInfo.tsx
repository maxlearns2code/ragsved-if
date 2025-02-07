"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";

type MenTeamInfoProps = {
  team: {
    league: string;
    championship: string;
    coach: string;
    captain: string;
    currentRank: string;
  };
};

export default function MenTeamInfo({ team }: MenTeamInfoProps) {
  const t = useTranslations("TeamPage");

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4 text-center ">
        {t("quickFacts")}
      </h2>
      <ul className="space-y-2 text-center mb-4">
        <li>
          <span className="font-semibold">{t("league")}:</span> {team.league}
        </li>
        <li>
          <span className="font-semibold">{t("coach")}:</span> {team.coach}
        </li>
        <li>
          <span className="font-semibold">{t("captain")}:</span> {team.captain}
        </li>
        <li>
          <span className="font-semibold">{t("currentRank")}:</span>{" "}
          {team.currentRank}
        </li>
      </ul>
      <Link href={team.championship}>
        <button className="">{t("results")}</button>
      </Link>
    </div>
  );
}
