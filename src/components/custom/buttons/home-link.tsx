"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ExternalLink, LucideProps } from "lucide-react";
import React from "react";

interface Props {
  title: string;
  href: string;
  Icon: React.ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
  >;
  isExternal?: boolean;
}

export const HomeLink = ({ title, href, Icon, isExternal = false }: Props) => {
  const ButtonComponent = isExternal ? "a" : Link;

  return (
    <ButtonComponent
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
    >
      <Button variant="outline" className="justify-between w-full h-14 group">
        <span className="flex items-center gap-2">
          <Icon className="w-6 h-6" />
          {title}
        </span>
        {isExternal && (
          <ExternalLink className="w-4 h-4 transition-opacity opacity-50 group-hover:opacity-100" />
        )}
      </Button>
    </ButtonComponent>
  );
};
