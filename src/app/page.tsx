import type { Metadata } from "next";
import HomeLinks from "@/components/client/home-links";
import { Card, CardContent } from "@/components/ui/card";
import { AnimatedAvatar } from "@/components/client/avatar";

export const metadata: Metadata = {
  title: "Home",
};

export default async function Home() {
  return (
    <Card className="w-full max-w-md">
      <CardContent className="flex flex-col items-center p-6 space-y-6">
        <AnimatedAvatar />
        <h1 className="text-2xl font-bold text-center">Javier Rodriguez</h1>
        <p className="text-center text-gray-500">
          Welcome to my personal website! 🧉
        </p>
        <div className="w-full space-y-4">
          <HomeLinks />
        </div>
      </CardContent>
    </Card>
  );
}
