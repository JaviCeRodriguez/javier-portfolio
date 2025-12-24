import { Hero } from "@/components/hero"
import { Skills } from "@/components/skills"
import { Contact } from "@/components/contact"
import { Experience } from "@/components/experience"
import { Navigation } from "@/components/navigation"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <Skills />
      <Experience />
      <Contact />
    </main>
  )
}
