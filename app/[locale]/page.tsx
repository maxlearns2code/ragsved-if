import About from "../components/About";
import Hero from "../components/Hero";
import TeamLogoScroll from "../components/TeamLogoScroll";
import Teams from "../components/Teams";

export default function Home() {
  return (
    <div className="text-4xl">
      <Hero /> 
      <About />     
      <Teams />
      <TeamLogoScroll />
    </div>
  );
}