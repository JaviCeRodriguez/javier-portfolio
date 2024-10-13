"use client";

import {
  Github,
  Linkedin,
  Mail,
  Rss,
  Twitter,
  UserRoundPen,
} from "lucide-react";
import { HomeLink } from "@/components/custom/buttons/home-link";

const links = [
  {
    title: "About",
    href: "/about",
    Icon: UserRoundPen,
    isExternal: false,
  },
  {
    title: "Blog",
    href: "/blog",
    Icon: Rss,
    isExternal: false,
  },
  {
    title: "GitHub",
    href: "https://github.com/JaviCeRodriguez",
    Icon: Github, // TODO: Replace icon in the future before v1 release of lucide-react
    isExternal: true,
  },
  {
    title: "LinkedIn",
    href: "https://www.linkedin.com/in/rodriguezjavierc/",
    Icon: Linkedin, // TODO: Replace icon in the future before v1 release of lucide-react
    isExternal: true,
  },
  {
    title: "X (Twitter)",
    href: "https://twitter.com/JaviCeRodriguez",
    Icon: Twitter, // TODO: Replace icon in the future before v1 release of lucide-react
    isExternal: true,
  },
  {
    title: "E-mail",
    href: "mailto:javicerodriguez@gmail.com",
    Icon: Mail,
    isExternal: true,
  },
];

const HomeLinks = () => {
  return (
    <div className="flex flex-col w-full gap-2">
      {links.map((link) => (
        <HomeLink key={link.title} {...link} />
      ))}
    </div>
  );
};

export default HomeLinks;
