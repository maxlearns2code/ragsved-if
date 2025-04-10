import Hero from "../components/Hero";
import News from "../components/News";
import Sponsor from "../components/Sponsor";
import Status from "../components/Status";

export default function Home() {
  return (
    <div className="text-4xl">
      <Hero />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Status />
        <News />
      </div>

      <Sponsor />
    </div>
  );
}
