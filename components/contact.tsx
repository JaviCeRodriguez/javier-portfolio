const contacts = [
  {
    label: "Email",
    display: "contacto@javo.com.ar",
    href: "mailto:contacto@javo.com.ar",
  },
  {
    label: "GitHub",
    display: "github.com/JaviCeRodriguez",
    href: "https://github.com/JaviCeRodriguez",
  },
  {
    label: "LinkedIn",
    display: "linkedin.com/in/javicerodriguez",
    href: "https://linkedin.com/in/javicerodriguez",
  },
  {
    label: "Twitter / X",
    display: "@javicerodriguez",
    href: "https://twitter.com/javicerodriguez",
  },
]

export function Contact() {
  return (
    <section id="contact" className="mb-8">
      <h2 className="text-xl font-bold mb-3">How to Reach Me</h2>
      <p className="text-sm leading-relaxed mb-4">
        You can send email to{" "}
        <a href="mailto:contacto@javo.com.ar">contacto@javo.com.ar</a>. I read
        everything sent there but may not always respond promptly. I am also
        reachable through the following:
      </p>
      <dl className="space-y-2 text-sm">
        {contacts.map((c) => (
          <div key={c.label} className="flex gap-4">
            <dt className="font-semibold text-muted-foreground w-28 shrink-0">{c.label}</dt>
            <dd>
              <a
                href={c.href}
                target={c.href.startsWith("mailto") ? undefined : "_blank"}
                rel={c.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
              >
                {c.display}
              </a>
            </dd>
          </div>
        ))}
      </dl>
      <p className="text-xs text-muted-foreground mt-10">
        &copy; {new Date().getFullYear()} Javier Rodriguez. All rights reserved.
      </p>
    </section>
  )
}
