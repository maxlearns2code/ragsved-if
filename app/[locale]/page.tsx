import Hero from "../components/Hero";
import Sponsor from "../components/Sponsor";
import Status from "../components/Status";

export default function Home() {
  return (
    <div className="text-4xl">
      <Hero />
      <Status />
      <Sponsor />
    </div>
  );
}
