import { FaCalendarAlt, FaExternalLinkAlt, FaMapMarkerAlt } from "react-icons/fa";

interface NewsProps {
  id: string;
  title: string;
  description: string;
  date: string;
  location: string;
  linkDescription: string;
  link: string;
  contactDescription: string;
  contact: string;
}

const NewsArticle = ({ article }: { article: NewsProps }) => (
  <section>
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold text-center mb-10">{article.title}</h1>
      <article className="flex flex-wrap justify-center items-center gap-8">
        <div className="w-full rounded-lg shadow-md flex bg-sec bg-white/10">
          <div className="inset-0 flex flex-col items-start text-white p-4 ">
            <h3 className="text-xl font-bold">{article.title}</h3>
            <p className="text-sm lg:text-base flex items-center gap-2 mt-4">
              <FaCalendarAlt className="text-lg" />
              {article.date}
            </p>
            <p className="text-sm lg:text-base flex items-center gap-2 mt-2">
              <FaMapMarkerAlt className="text-lg" />
              {article.location}
            </p>
            <p className="text-sm lg:text-base mt-2">{article.description}</p>
            <p className="text-sm lg:text-base flex items-center gap-2 mt-2 hover:text-secondary hover:underline">
              <FaExternalLinkAlt className="text-lg" />
              <a href={article.link} target="_blank" rel="noopener noreferrer">{article.linkDescription}</a>
            </p>
            <p className="text-sm lg:text-base mt-2">
              {article.contactDescription} {article.contact}
            </p>
          </div>
        </div>
      </article>
    </div>
  </section>
);

export default NewsArticle;
