"use client"

import { useState } from "react"
import { Mail, Github, Linkedin, Twitter } from "lucide-react"
import { Card } from "@/components/ui/card"

const socialLinks = [
  {
    name: "Email",
    icon: Mail,
    href: "mailto:contacto@javo.com.ar",
    label: "contacto@javo.com.ar",
  },
  {
    name: "GitHub",
    icon: Github,
    href: "https://github.com/JaviCeRodriguez",
    label: "github.com/JaviCeRodriguez",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "https://linkedin.com/in/javicerodriguez",
    label: "linkedin.com/in/javicerodriguez",
  },
  {
    name: "Twitter",
    icon: Twitter,
    href: "https://twitter.com/javicerodriguez",
    label: "@javicerodriguez",
  },
]

export function Contact() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section id="contact" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20">
      <div className="container mx-auto max-w-4xl">
        <div className="space-y-12">
          <div className="space-y-4 text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-balance">Let's Connect</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
            {socialLinks.map((link, index) => {
              const Icon = link.icon
              return (
                <Card
                  key={link.name}
                  className={`transition-all duration-300 ${
                    hoveredIndex === index ? "scale-105 shadow-xl" : "scale-100"
                  }`}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <a
                    href={link.href}
                    target={link.name !== "Email" ? "_blank" : undefined}
                    rel={link.name !== "Email" ? "noopener noreferrer" : undefined}
                    className="flex items-center gap-4 p-6 group"
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent group-hover:text-accent-foreground transition-all">
                      <Icon className="h-6 w-6" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-muted-foreground">{link.name}</p>
                      <p className="text-base font-semibold truncate group-hover:text-accent transition-colors">
                        {link.label}
                      </p>
                    </div>
                  </a>
                </Card>
              )
            })}
          </div>

          <div className="text-center pt-8">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Javier Rodriguez. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
