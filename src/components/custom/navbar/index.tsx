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
import { ModeToggle } from "@/components/custom/toggle";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

const navItemsData = [
  {
    name: "Home",
    link: "/",
    isExternal: false,
  },
  {
    name: "Experience",
    link: "/experience",
    isExternal: false,
  },
  {
    name: "Contact",
    link: "/contact",
    isExternal: false,
  },
  {
    name: "Blog",
    link: "/",
    isExternal: true,
  },
];

const NavItemsTable: React.FC = () => {
  return (
    <div className="hidden sm:flex">
      {navItemsData.map((item) => {
        return (
          <NavigationMenuItem key={item.name}>
            <Link href={item.link} legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                {item.name}
                {item.isExternal && (
                  <ExternalLink className="relative ml-2 h-3 w-3" />
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
                    <ExternalLink className="relative ml-2 h-3 w-3" />
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
    <div className="flex flex-row justify-between items-center p-2 fixed top-0 w-full bg-background">
      <h1 className="text-xl">🧉</h1>

      <NavigationMenu>
        <NavigationMenuList>
          <NavItemsTable />
          <NavItemsMobile />
          <ModeToggle />
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};

export default Navbar;
