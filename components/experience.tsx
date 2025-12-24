"use client"

import { motion } from "framer-motion"
import { Calendar } from "lucide-react"

const experiences = [
  {
    title: "Tech Lead Frontend",
    company: "Incubator",
    period: "Jan 2023 - Present",
    description:
      "Leading frontend development with React.js and TypeScript. Managing team coordination, task assignment, sprint estimation, and code reviews. Conducting client meetings for requirements gathering and training new team members on project technologies.",
  },
  {
    title: "Frontend Developer SSr",
    company: "Incubator",
    period: "Oct 2021 - Jan 2023",
    description:
      "Developed web applications using React.js, TypeScript, Gatsby, and Next.js. Worked with SCRUM and Kanban methodologies, participated in sprint planning and estimation, and contributed to team coordination.",
  },
  {
    title: "Teaching Assistant",
    company: "Universidad Nacional de San Martín",
    period: "Mar 2023 - Dec 2023",
    description:
      "Teaching assistant for Programming 1 in the Data Science degree program. Supported students in learning fundamental programming concepts and problem-solving skills.",
  },
  {
    title: "Community Volunteer & Python Coordinator",
    company: "FrontendCafé",
    period: "Jan 2021 - Aug 2022",
    description:
      "Part of the staff team and coordinator of the Python study group. Contributed to projects in development for the community platform and helped organize learning initiatives.",
  },
  {
    title: "QA Analyst",
    company: "Universidad Nacional de San Martín",
    period: "Jan 2021 - Sep 2021",
    description:
      "Software quality testing and validation. Created verification and validation plans, designed use cases and test cases, documented for audits, and evaluated requirements.",
  },
  {
    title: "Professional Audio Technician",
    company: "Servicio Técnico Profesional",
    period: "Apr 2015 - Jun 2020",
    description:
      "Maintenance and repair of professional audio and lighting equipment. Developed strong problem-solving and technical troubleshooting skills.",
  },
]

export function Experience() {
  return (
    <section id="experience" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-16"
        >
          Work Experience
        </motion.h2>

        <div className="relative">
          <div className="absolute left-[19px] top-0 bottom-0 w-0.5 bg-primary/20" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                <div className="absolute left-0 top-0 w-10 h-10 rounded-full bg-background border-2 border-primary flex items-center justify-center">
                  <Calendar className="w-5 h-5 text-primary" />
                </div>

                <div className="ml-16">
                  <h3 className="text-xl font-bold mb-1">{exp.title}</h3>
                  <div className="flex items-center gap-2 text-muted-foreground mb-2">
                    <span className="font-medium">{exp.company}</span>
                    <span>•</span>
                    <span className="text-sm">{exp.period}</span>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{exp.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
