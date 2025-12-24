"use client"

import { useEffect, useRef, useState } from "react"

const skills = [
  "React",
  "Next.js",
  "TypeScript",
  "JavaScript",
  "Tailwind CSS",
  "CSS",
  "HTML",
  "Frontend Architecture",
  "Data Engineering",
  "QA Testing",
  "Git",
  "GitLab",
  "GitHub",
  "REST APIs",
  "Web Performance",
  "Responsive Design",
  "Accessibility",
  "Team Leadership",
]

export function Skills() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20"
    >
      <div className="container mx-auto max-w-4xl">
        <div className="space-y-12">
          <div className="space-y-4 text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-balance">Skills & Expertise</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              A comprehensive toolkit for building modern web applications
            </p>
          </div>

          <div
            className={`flex flex-wrap justify-center gap-3 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {skills.map((skill, index) => (
              <div
                key={skill}
                className="px-4 py-2 bg-accent/10 text-accent border border-accent/20 rounded-full text-sm sm:text-base font-medium transition-all duration-150 hover:scale-110 hover:bg-accent/20 hover:shadow-md"
                style={{
                  transitionDelay: `${index * 50}ms`,
                }}
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
