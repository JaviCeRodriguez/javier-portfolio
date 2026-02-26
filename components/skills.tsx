const skillGroups = [
  {
    category: "Languages & Frameworks",
    items: ["JavaScript", "TypeScript", "React", "Next.js", "Gatsby", "HTML", "CSS"],
  },
  {
    category: "Styling & UI",
    items: ["Tailwind CSS", "Responsive Design", "Accessibility", "Web Performance"],
  },
  {
    category: "Architecture & Tooling",
    items: ["Frontend Architecture", "REST APIs", "Git", "GitHub", "GitLab"],
  },
  {
    category: "Other",
    items: ["Data Engineering", "QA Testing", "Team Leadership", "SCRUM / Kanban"],
  },
]

export function Skills() {
  return (
    <section id="skills" className="mb-8">
      <h2 className="text-xl font-bold mb-3">Skills &amp; Expertise</h2>
      <dl className="space-y-3 text-sm leading-relaxed">
        {skillGroups.map((group) => (
          <div key={group.category} className="flex flex-col sm:flex-row gap-1 sm:gap-4">
            <dt className="font-semibold text-muted-foreground min-w-[14rem] shrink-0">
              {group.category}
            </dt>
            <dd className="text-foreground">
              {group.items.join(", ")}
            </dd>
          </div>
        ))}
      </dl>
      <hr className="mt-6" />
    </section>
  )
}
