const experiences = [
  {
    title: "Tech Lead Frontend",
    company: "Incubator",
    period: "Jan 2023 — Present",
    description:
      "Leading frontend development with React.js and TypeScript. Managing team coordination, task assignment, sprint estimation, and code reviews. Conducting client meetings for requirements gathering and training new team members.",
  },
  {
    title: "Frontend Developer SSr",
    company: "Incubator",
    period: "Oct 2021 — Jan 2023",
    description:
      "Developed web applications using React.js, TypeScript, Gatsby, and Next.js. Worked with SCRUM and Kanban methodologies, participated in sprint planning and estimation.",
  },
  {
    title: "Teaching Assistant",
    company: "Universidad Nacional de San Martín",
    period: "Mar 2023 — Dec 2023",
    description:
      "Teaching assistant for Programming 1 in the Data Science degree program. Supported students in learning fundamental programming concepts and problem-solving skills.",
  },
  {
    title: "Community Volunteer & Python Coordinator",
    company: "FrontendCafé",
    period: "Jan 2021 — Aug 2022",
    description:
      "Part of the staff team and coordinator of the Python study group. Contributed to projects for the community platform and helped organize learning initiatives.",
  },
  {
    title: "QA Analyst",
    company: "Universidad Nacional de San Martín",
    period: "Jan 2021 — Sep 2021",
    description:
      "Software quality testing and validation. Created verification and validation plans, designed use cases and test cases, documented for audits, and evaluated requirements.",
  },
  {
    title: "Professional Audio Technician",
    company: "Servicio Técnico Profesional",
    period: "Apr 2015 — Jun 2020",
    description:
      "Maintenance and repair of professional audio and lighting equipment. Developed strong problem-solving and technical troubleshooting skills.",
  },
]

export function Experience() {
  return (
    <section id="experience" className="mb-8">
      <h2 className="text-xl font-bold mb-4">Work Experience</h2>
      <div className="space-y-6 text-sm leading-relaxed">
        {experiences.map((exp, index) => (
          <div key={index}>
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:gap-2 mb-1">
              <h3 className="font-semibold text-base">
                {exp.title}
              </h3>
              <span className="hidden sm:inline text-muted-foreground">—</span>
              <span className="text-muted-foreground">{exp.company}</span>
            </div>
            <p className="text-xs text-muted-foreground font-mono mb-1">{exp.period}</p>
            <p className="text-foreground">{exp.description}</p>
          </div>
        ))}
      </div>
      <hr className="mt-6" />
    </section>
  )
}
