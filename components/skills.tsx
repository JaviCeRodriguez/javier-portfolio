const skillGroups = [
  {
    category: "Lenguajes y frameworks",
    items: ["JavaScript", "TypeScript", "React", "Next.js", "Gatsby", "HTML", "CSS"],
  },
  {
    category: "Estilos e interfaces",
    items: ["Tailwind CSS", "Diseño responsive", "Accesibilidad", "Rendimiento web"],
  },
  {
    category: "Arquitectura y herramientas",
    items: ["Arquitectura frontend", "APIs REST", "Git", "GitHub", "GitLab"],
  },
  {
    category: "Más allá de la interfaz",
    items: ["Ingeniería de datos", "Testing QA", "Liderazgo de equipos", "SCRUM / Kanban"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="section-rule scroll-mt-28 py-24 md:py-36">
      <div className="site-container grid gap-12 md:grid-cols-12">
        <div className="md:col-span-4">
          <h2 className="max-w-[9ch] text-5xl md:sticky md:top-32 md:text-6xl">Las herramientas son solo una parte.</h2>
        </div>
        <div className="md:col-span-7 md:col-start-6">
          <p className="mb-12 max-w-[54ch] text-xl leading-relaxed text-muted-foreground">
            Conecto los detalles de implementación con la intención del producto, la calidad técnica y las personas que hacen el trabajo.
          </p>
          <dl>
            {skillGroups.map((group, index) => (
              <div key={group.category} className="grid gap-4 border-t border-border py-7 sm:grid-cols-[3rem_1fr]">
                <span className="font-mono text-xs text-accent">0{index + 1}</span>
                <div>
                  <dt className="mb-3 text-lg font-bold tracking-tight">{group.category}</dt>
                  <dd className="flex flex-wrap gap-x-2 gap-y-1 text-muted-foreground">
                    {group.items.map((item, itemIndex) => (
                      <span key={item}>
                        {item}
                        {itemIndex < group.items.length - 1 && <span className="ml-2 text-border">/</span>}
                      </span>
                    ))}
                  </dd>
                </div>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
