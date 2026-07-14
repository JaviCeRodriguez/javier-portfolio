const experiences = [
  {
    title: "Tech Lead Frontend",
    company: "Incubator",
    period: "Ene 2023 – Actualidad",
    description:
      "Lidero el desarrollo frontend con React y TypeScript. Coordino el equipo, planifico el trabajo, reviso código, relevo necesidades con clientes y acompaño a quienes se suman.",
  },
  {
    title: "Frontend Developer SSr",
    company: "Incubator",
    period: "Oct 2021 – Ene 2023",
    description:
      "Desarrollé aplicaciones web con React, TypeScript, Gatsby y Next.js, y participé en la planificación y estimación de equipos SCRUM y Kanban.",
  },
  {
    title: "Ayudante de cátedra",
    company: "Universidad Nacional de San Martín",
    period: "Mar 2023 – Dic 2023",
    description:
      "Acompañé a estudiantes de Programación 1 de la Licenciatura en Ciencia de Datos, llevando conceptos fundamentales a la resolución práctica de problemas.",
  },
  {
    title: "Voluntario y coordinador de Python",
    company: "FrontendCafé",
    period: "Ene 2021 – Ago 2022",
    description:
      "Formé parte del staff de la comunidad, coordiné el grupo de estudio de Python, contribuí a proyectos de la plataforma y organicé iniciativas de aprendizaje.",
  },
  {
    title: "Analista QA",
    company: "Universidad Nacional de San Martín",
    period: "Ene 2021 – Sep 2021",
    description:
      "Creé planes de validación, casos de uso y casos de prueba; documenté evidencia para auditorías y evalué requerimientos de software.",
  },
  {
    title: "Técnico de audio profesional",
    company: "Servicio Técnico Profesional",
    period: "Abr 2015 – Jun 2020",
    description:
      "Mantuve y reparé equipos profesionales de audio e iluminación. Ahí desarrollé la práctica de diagnóstico que todavía aplico al software.",
  },
];

export function Experience() {
  return (
    <section id="experience" className="section-rule scroll-mt-28 py-24 md:py-36">
      <div className="site-container">
        <div className="max-w-3xl">
          <h2 className="text-5xl md:text-7xl">Experiencia, capa por capa.</h2>
          <p className="mt-6 max-w-[55ch] text-lg text-muted-foreground">
            Un recorrido por el liderazgo frontend, la docencia, la calidad, las comunidades y el oficio técnico.
          </p>
        </div>

        <ol className="mt-16 md:ml-[25%] md:mt-24">
          {experiences.map((experience, index) => (
            <li key={`${experience.company}-${experience.period}`} className="group grid gap-5 border-t border-border py-8 sm:grid-cols-[4rem_1fr] md:grid-cols-[6rem_1fr] md:py-10">
              <span className="font-mono text-xs text-muted-foreground transition-colors group-hover:text-accent">
                {String(index + 1).padStart(2, "0")}
              </span>
              <article className="grid gap-5 lg:grid-cols-[minmax(12rem,0.75fr)_minmax(18rem,1.25fr)]">
                <div>
                  <h3 className="text-2xl tracking-[-0.035em]">{experience.title}</h3>
                  <p className="mt-1 text-sm font-bold text-accent">{experience.company}</p>
                  <p className="mt-3 font-mono text-xs text-muted-foreground">{experience.period}</p>
                </div>
                <p className="mb-0 max-w-[58ch] text-muted-foreground">{experience.description}</p>
              </article>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
