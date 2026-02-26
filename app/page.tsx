import { Hero } from "@/components/hero"
import { Skills } from "@/components/skills"
import { Contact } from "@/components/contact"
import { Experience } from "@/components/experience"
import { Navigation } from "@/components/navigation"

export default function Home() {
  return (
    <>
      <Navigation />
      {/* Main content offset for desktop sidebar */}
      <main className="md:ml-36 pt-12 md:pt-12 px-5 sm:px-8 max-w-2xl pb-20 mt-11 md:mt-0">
        <Hero />
        <Skills />
        <Experience />
        <Contact />
      </main>
    </>
  )
}
