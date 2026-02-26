"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"

const navItems = [
  { name: "About", href: "/#about" },
  { name: "Skills", href: "/#skills" },
  { name: "Experience", href: "/#experience" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/#contact" },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const handleNavClick = (href: string) => {
    if (href.startsWith("/#")) {
      if (pathname !== "/") {
        window.location.href = href
      } else {
        const element = document.querySelector(href.substring(1))
        if (element) {
          element.scrollIntoView({ behavior: "smooth" })
        }
      }
    }
    setIsOpen(false)
  }

  return (
    <>
      {/* Desktop: vertical sidebar */}
      <nav
        className="hidden md:block fixed top-0 left-0 h-full w-36 pt-12 pl-6 pr-4"
        aria-label="Site navigation"
      >
        <ul className="space-y-3 text-sm">
          {navItems.map((item) =>
            item.href === "/blog" ? (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className="text-muted-foreground hover:text-foreground transition-colors no-underline hover:underline"
                >
                  {item.name}
                </Link>
              </li>
            ) : (
              <li key={item.name}>
                <a
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault()
                    handleNavClick(item.href)
                  }}
                  className="text-muted-foreground hover:text-foreground transition-colors no-underline hover:underline cursor-pointer"
                >
                  {item.name}
                </a>
              </li>
            ),
          )}
        </ul>
      </nav>

      {/* Mobile: top bar */}
      <nav
        className="md:hidden fixed top-0 left-0 right-0 z-50 bg-background border-b border-border"
        aria-label="Site navigation"
      >
        <div className="flex items-center justify-between px-4 h-11">
          <Link href="/" className="text-sm font-semibold no-underline text-foreground">
            Javier Rodriguez
          </Link>
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            className="p-1 text-muted-foreground hover:text-foreground transition-colors"
          >
            {isOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
        {isOpen && (
          <div className="bg-background border-b border-border px-4 pb-3">
            <ul className="space-y-2 text-sm pt-2">
              {navItems.map((item) =>
                item.href === "/blog" ? (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ) : (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      onClick={(e) => {
                        e.preventDefault()
                        handleNavClick(item.href)
                      }}
                      className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                    >
                      {item.name}
                    </a>
                  </li>
                ),
              )}
            </ul>
          </div>
        )}
      </nav>
    </>
  )
}
