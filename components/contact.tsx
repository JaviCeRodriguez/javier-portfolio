const contacts = [
  { label: "GitHub", href: "https://github.com/JaviCeRodriguez" },
  { label: "LinkedIn", href: "https://linkedin.com/in/javicerodriguez" },
  { label: "Twitter / X", href: "https://twitter.com/javicerodriguez" },
];

export function Contact() {
  return (
    <footer id="contact" className="section-rule scroll-mt-28 pb-8 pt-24 md:pt-36">
      <div className="site-container">
        <div className="grid gap-12 md:grid-cols-12 md:items-end">
          <div className="md:col-span-8">
            <p className="mb-4 font-mono text-sm text-accent">¿Tenés un problema que valga la pena resolver?</p>
            <h2 className="text-[clamp(3rem,7vw,7.2rem)] leading-[0.92]">Hagámoslo claro.</h2>
            <a className="mt-9 inline-block break-all text-2xl font-semibold tracking-[-0.04em] underline decoration-accent decoration-2 underline-offset-8 transition-colors hover:text-accent md:text-4xl" href="mailto:contacto@javo.com.ar">
              contacto@javo.com.ar
            </a>
          </div>
          <p className="mb-0 max-w-[34ch] text-muted-foreground md:col-span-3 md:col-start-10">
            Leo todo lo que llega a esta casilla. A veces puedo tardar en responder, pero los mensajes con una buena idea siempre captan mi atención.
          </p>
        </div>

        <div className="mt-24 flex flex-col gap-7 border-t border-border pt-7 text-sm sm:flex-row sm:items-center sm:justify-between">
          <p className="mb-0 text-muted-foreground">© {new Date().getFullYear()} Javier Rodriguez</p>
          <ul className="flex flex-wrap gap-x-6 gap-y-3 font-semibold">
            {contacts.map((contact) => (
              <li key={contact.label}>
                <a href={contact.href} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-accent">
                  {contact.label} ↗
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
