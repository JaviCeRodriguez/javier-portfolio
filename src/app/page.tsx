import type { Metadata } from "next";
import { showExperiences } from "@/flags";
import Presentation from "@/components/custom/presentation";

export const metadata: Metadata = {
  title: "Home",
};

export default async function Home() {
  const isExperiencesEnabled = await showExperiences();

  return (
    <main className="mt-5 mb-20 sm:mt-20">
      <Presentation />
      {isExperiencesEnabled ? (
        <h3 className="mt-8 text-2xl font-semibold">Experiences</h3>
      ) : null}
    </main>
  );
}
