"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import servers from "@/utils/servers.json";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const DiscordServers = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {servers.map((server) => {
        return (
          <Card key={server.name}>
            <CardHeader className="flex-row gap-4">
              <Image
                src={server.image}
                width={64}
                height={64}
                alt={server.name}
                className="rounded-xl"
              />
              <CardTitle>{server.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{server.description}</p>
              <Link href={server.url} passHref target="_blank">
                <Button className="mt-4 w-full">Join</Button>
              </Link>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
};

export default DiscordServers;
