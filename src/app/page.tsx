import type { Metadata } from "next";
import Presentation from "@/components/custom/presentation";
import HomeLinks from "@/components/client/home-links";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export const metadata: Metadata = {
  title: "Home",
};

export default async function Home() {
  return (
    <Card className="w-full max-w-md">
      <CardContent className="flex flex-col items-center p-6 space-y-6">
        <Avatar className="w-24 h-24">
          <AvatarImage
            src="/images/javo.jpeg"
            alt="Profile Picture"
            className="bg-center bg-contain"
          />
          <AvatarFallback>JR</AvatarFallback>
        </Avatar>
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
