import { Hero } from "@/sections/Hero";
import { FeaturedProjects } from "@/sections/FeaturedProjects";
import { Projects } from "@/sections/Projects";
import { ResearchLab } from "@/sections/ResearchLab";
import { TechnicalArsenal } from "@/sections/TechnicalArsenal";
import { Timeline } from "@/sections/Timeline";
import { Contact } from "@/sections/Contact";
import { Footer } from "@/components/Footer";
import { BackgroundEffects } from "@/components/ui/BackgroundEffects";

export default function Home() {
  return (
    <main className="min-h-screen relative">
      <BackgroundEffects />
      <Hero />
      <FeaturedProjects />
      <Projects />
      <ResearchLab />
      <TechnicalArsenal />
      <Timeline />
      <Contact />
      <Footer />
    </main>
  );
}
