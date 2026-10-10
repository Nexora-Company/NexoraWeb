import { Hero } from "../../components/Hero/Hero.jsx";
import { homeContent } from "../../content/home/home.content.js";
import "./Home.css";

export function Home() {
  return (
    <main id={homeContent.id} className="home">
      {homeContent.sections.map((section, i) => (
        <Hero key={section.id} content={section} headingLevel={i === 0 ? 1 : 2} />
      ))}
    </main>
  );
}
