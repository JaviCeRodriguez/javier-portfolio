import { Contact } from "@/components/contact";
import { Experience } from "@/components/experience";
import { Hero } from "@/components/hero";
import { Navigation } from "@/components/navigation";
import { Skills } from "@/components/skills";

export default function Home() {
  return (
    <>
      <Navigation />
      <main id="main-content">
        <Hero />
        <Skills />
        <Experience />
        <Contact />
      </main>
    </>
  );
}
