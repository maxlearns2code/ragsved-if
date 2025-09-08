import {
  FaCalendarAlt,
  FaExternalLinkAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

interface NewsProps {
  id: string;
  icon: string;
  title: string;
  description: string;
  date: string;
  location: string;
  locationUrl?: string;
  locationLinkDescription?: string;
  linkDescription: string;
  link: string;
}

const NewsArticle = ({
  article,
  showExternalLink = true,
}: {
  article: NewsProps;
  showExternalLink?: boolean;
}) => (
  <section className="flex justify-center items-center py-8 px-4 min-h-[24rem]">
    <div className="relative rounded-2xl shadow-xl backdrop-blur-lg p-8 flex flex-col gap-6 border border-white/30">
      <div className="absolute top-[-20px] left-8 z-10">
        <span className="inline-block rounded-full bg-secondary text-3xl shadow-lg p-3 border-4 border-white">
          {article.icon}
        </span>
      </div>

      <h2 className="text-2xl text-justify font-extrabold tracking-wider drop-shadow mb-2 mt-8">
        {article.title}
      </h2>
      <div className="flex gap-4 flex-wrap text-base items-center mb-1">
        <span className="flex items-center gap-2">
          <FaCalendarAlt className="text-primary-600" />
          {article.date}
        </span>
        <span className="flex items-center gap-2">
          <FaMapMarkerAlt className="text-tertiary" />
          {article.location}
          {showExternalLink && (
            <a
              href={article.locationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block ml-1 font-semibold underline text-primay hover:text-secondary transition"
            >
              {article.locationLinkDescription ?? "Karta"}
            </a>
          )}
        </span>
      </div>
      <p className="text-lg text-justify leading-relaxed drop-shadow-sm overflow-hidden">
        {article.description}
      </p>
      <div className="mt-2">
        {showExternalLink && (
          <a
            href={article.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 font-semibold shadow hover:scale-105 focus:outline-none transition"
          >
            <FaExternalLinkAlt />
            {article.linkDescription}
          </a>
        )}
      </div>
    </div>
  </section>
);

export default NewsArticle;
