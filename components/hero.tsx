"use client"

import { useEffect, useState } from "react"
import { ArrowDown } from "lucide-react"
import Image from "next/image"

export function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section id="about" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16">
      <div className="container mx-auto max-w-6xl">
        <div
          className={`grid md:grid-cols-2 gap-8 md:gap-12 items-center transition-all duration-700 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Text Content */}
          <div className="space-y-6 md:space-y-8 order-2 md:order-1">
            <div className="space-y-2">
              <p className="text-sm md:text-base text-muted-foreground font-medium">Hello, I'm</p>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-balance leading-tight">
                Javier Rodriguez
              </h1>
              <p className="text-xl md:text-2xl text-accent font-semibold">Tech Lead Frontend @ Incubator 🍃</p>
            </div>

            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed text-pretty">
              Self-taught Frontend Developer passionate about everything related to development and research. Studying
              Technical Programming at UTN and specializing in React, TypeScript, Next.js, and Data Science. When not
              coding, you'll find me with friends sharing mate.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault()
                  document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })
                }}
                className="inline-flex items-center justify-center px-6 py-3 bg-accent text-accent-foreground rounded-lg font-medium hover:bg-accent/90 transition-all hover:scale-105 active:scale-95"
              >
                Get in Touch
              </a>
              <a
                href="#skills"
                onClick={(e) => {
                  e.preventDefault()
                  document.querySelector("#skills")?.scrollIntoView({ behavior: "smooth" })
                }}
                className="inline-flex items-center justify-center px-6 py-3 border border-border rounded-lg font-medium hover:bg-secondary transition-all hover:scale-105 active:scale-95"
              >
                View Skills
              </a>
            </div>

            <div className="pt-8 animate-bounce">
              <ArrowDown className="h-6 w-6 text-muted-foreground mx-auto sm:mx-0" />
            </div>
          </div>

          <div className="order-1 md:order-2">
            <div className="relative w-full aspect-square max-w-md mx-auto md:aspect-[4/5] md:max-w-none md:h-[600px] lg:aspect-square lg:max-w-md lg:h-auto">
              <Image
                src="/mate-mac.jpg"
                alt="Frontend Engineer"
                fill
                className="object-cover rounded-2xl shadow-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
