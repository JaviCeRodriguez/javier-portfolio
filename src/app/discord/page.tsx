import type { Metadata } from "next";
import DiscordServers from "@/components/custom/discordServers";
import { MessageSquareMore } from "lucide-react";

export const metadata: Metadata = {
  title: "Discord servers",
};

export default function Discord() {
  return (
    <main className="mt-5 mb-20 sm:mt-20">
      <h2 className="flex items-center text-2xl mb-4 font-semibold lg:text-3xl">
        Discord servers I&apos;m in&nbsp;
        <MessageSquareMore />
      </h2>
      <DiscordServers />
    </main>
  );
}
