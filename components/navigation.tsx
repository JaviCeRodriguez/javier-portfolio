"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { BrandMark } from "@/components/brand-mark";

const navItems = [
  { name: "Sobre mí", href: "/#about" },
  { name: "Habilidades", href: "/#skills" },
  { name: "Experiencia", href: "/#experience" },
  { name: "Blog", href: "/blog" },
  { name: "Contacto", href: "/#contact" },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background">
      <nav className="site-container flex h-[4.5rem] items-center justify-between" aria-label="Navegación principal">
        <Link href="/" className="group flex items-center gap-3 no-underline" onClick={() => setIsOpen(false)}>
          <span className="grid size-9 place-items-center rounded-md bg-foreground text-background transition-transform group-hover:-rotate-3">
            <BrandMark className="size-7" />
          </span>
          <span className="text-sm font-extrabold tracking-[-0.03em]">Javier Rodriguez</span>
        </Link>

        <ul className="hidden items-center gap-7 text-sm font-semibold md:flex">
          {navItems.map((item) => {
            const active = item.href === "/blog" && pathname.startsWith("/blog");
            return (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className={`relative py-2 no-underline transition-colors hover:text-accent ${active ? "text-accent" : "text-foreground"}`}
                >
                  {item.name}
                  {active && <span className="absolute inset-x-0 -bottom-[1.18rem] h-0.5 bg-accent" />}
                </Link>
              </li>
            );
          })}
        </ul>

        <button
          type="button"
          onClick={() => setIsOpen((open) => !open)}
          aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={isOpen}
          className="grid size-10 place-items-center rounded-md border border-border text-foreground transition-colors hover:bg-muted md:hidden"
        >
          {isOpen ? <X className="size-5" aria-hidden="true" /> : <Menu className="size-5" aria-hidden="true" />}
        </button>
      </nav>

      {isOpen && (
        <div className="border-t border-border bg-background md:hidden">
          <ul className="site-container grid py-3">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block py-3 text-lg font-semibold no-underline transition-colors hover:text-accent"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
