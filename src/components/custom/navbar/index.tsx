"use client";

import * as React from "react";
import { ExternalLink, Menu } from "lucide-react";
import Link from "next/link";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

const navItemsData = [
  // {
  //   name: "Home",
  //   link: "/",
  //   isExternal: false,
  // },
  // {
  //   name: "Experience",
  //   link: "/experience",
  //   isExternal: false,
  // },
  // {
  //   name: "Contact",
  //   link: "/contact",
  //   isExternal: false,
  // },
  {
    name: "Discord",
    link: "/discord",
    isExternal: false,
  },
  {
    name: "Blog",
    link: "/blog",
    isExternal: false,
  },
];

const NavItemsTable: React.FC = () => {
  return (
    // <div className="hidden sm:flex">
    <div className="flex">
      {navItemsData.map((item) => {
        return (
          <NavigationMenuItem key={item.name}>
            <Link href={item.link} legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                {item.name}
                {item.isExternal && (
                  <ExternalLink className="relative w-3 h-3 ml-2" />
                )}
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        );
      })}
    </div>
  );
};

const NavItemsMobile: React.FC = () => {
  return (
    <div className="flex sm:hidden">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="icon">
            <Menu />
            <span className="sr-only">Menu</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          {navItemsData.map((item) => (
            <DropdownMenuItem key={item.name}>
              <Link href={item.link} legacyBehavior passHref>
                <>
                  <p>{item.name}</p>
                  {item.isExternal && (
                    <ExternalLink className="relative w-3 h-3 ml-2" />
                  )}
                </>
              </Link>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

const Navbar = () => {
  return (
    <div className="fixed top-0 z-50 flex flex-row items-center justify-between w-full p-2 bg-background">
      <Link href="/" passHref>
        <h1 className="text-xl">🧉</h1>
      </Link>

      <NavigationMenu>
        <NavigationMenuList>
          <NavItemsTable />
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};

export default Navbar;
