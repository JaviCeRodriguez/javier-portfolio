import { Contact } from "@/components/contact";
import { Experience } from "@/components/experience";
import { Hero } from "@/components/hero";
import { Navigation } from "@/components/navigation";
import { PortfolioAnalytics } from "@/components/portfolio-analytics";
import { Skills } from "@/components/skills";

export default function Home() {
  return (
    <>
      <Navigation />
      <PortfolioAnalytics />
      <main id="main-content">
        <Hero />
        <Skills />
        <Experience />
        <Contact />
      </main>
    </>
  );
}
