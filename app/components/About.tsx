import data from '../data/data.json';
import AnimatedTimelineSection from './AnimatedTimelineSection';

const About = async () => {
  const { title, sections } = data.aboutUs;

  if (!sections || sections.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <section id="about" className="py-4 mb-8 md:mb-0 min-h-screen">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8 text-center">{title}</h2>
        
        <div className="relative max-w-5xl mx-auto">
          <div className="hidden md:block absolute left-1/2 -ml-0.5 w-0.5 h-full bg-secondary" aria-hidden="true" />
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
