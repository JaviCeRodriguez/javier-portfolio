import type { Metadata } from "next";
import Presentation from "@/components/custom/presentation";

export const metadata: Metadata = {
  title: "Home",
};

export default function Home() {
  return (
    <main className="mt-5 mb-20 sm:mt-20">
      <Presentation />
    </main>
  );
}
