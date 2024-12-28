import { useTranslations } from "next-intl";
import AnimatedTimelineSection from "./AnimatedTimelineSection";

const About = () => {
  const t = useTranslations("AboutUs");

  const sections = [
    "humbleBeginnings",
    "risingToTheChallenge",
    "aimingHigher",
    "growthAndExpansion",
    "whereWeStand",
    "ourMission",
  ];

  return (
    <section id="about" className="py-4 md:py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center overflow-hidden">
          {t("title")}
        </h2>

        <div className="relative max-w-5xl mx-auto">
          <div
            className="hidden md:block absolute left-1/2 -ml-0.5 w-0.5 h-full bg-secondary"
            aria-hidden="true"
          />
          {sections.map((section, index) => (
            <AnimatedTimelineSection
              key={index}
              section={section}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
