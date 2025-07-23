import React from "react";
import { Button } from "./button";
import type { languages } from "@/i18n/config";

interface NavigationProps {
  currentPath?: string;
  className?: string;
  currentLang: keyof typeof languages;
}

export function Navigation({
  currentPath,
  className,
  currentLang,
}: NavigationProps) {
  const routeLang = currentLang === "es" ? "/es" : "";

  const navItems = [
    { label: "Home", href: `${routeLang}/` },
    // { label: "Blog", href: `${routeLang}/blog` },
  ];

  return (
    <nav className={`flex items-center gap-4 ${className || ""}`}>
      {navItems.map((item) => (
        <Button
          key={item.href}
          variant={currentPath === item.href ? "default" : "ghost"}
          asChild
        >
          <a href={item.href} className="no-underline">
            {item.label}
          </a>
        </Button>
      ))}
    </nav>
  );
}
