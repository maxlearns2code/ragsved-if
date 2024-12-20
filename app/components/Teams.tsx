import Image from "next/image";
import Link from "next/link";
import { IoChevronForward } from "react-icons/io5";
import data from "../data/data.en.json";

export default function Teams() {
  return (
    <section
      id="teams"
      className="mb-8 md:mb-0 min-h-screen flex-col justify-center items-center py-2 px-4 sm:px-6 lg:px-8"
    >
      <h2 className="text-3xl font-bold text-center pt-8 mb-8">Our Teams</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {data.teams.map((team) => (
          <Link
            href={`/teams/${team.id}`}
            key={team.id}
            className="block group"
          >
            <div className="overflow-hidden rounded-lg shadow-lg transition duration-300 ease-in-out transform group-hover:scale-105">
              <Image
                src={team.image}
                alt={team.name}
                width={1071}
                height={1068}
                className="rounded-lg shadow-xl"
              />
              <div className="absolute inset-0 flex items-end justify-end p-4">
                <IoChevronForward className="text-white text-3xl" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
