import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <section id="about" className="site-container grid min-h-[calc(100dvh-4.5rem)] items-center gap-12 py-12 md:grid-cols-12 md:py-16">
      <div className="md:col-span-7 lg:col-span-8">
        <p className="eyebrow reveal mb-6 text-accent">Tech Lead Frontend</p>
        <h1 className="reveal reveal-delay-1 max-w-[12ch] text-[clamp(3.4rem,8.3vw,8.6rem)] font-semibold leading-[0.88] tracking-[-0.075em]">
          Construyo pensando en todo el producto.
        </h1>
        <div className="reveal reveal-delay-2 mt-8 grid max-w-3xl gap-6 border-t border-border pt-6 sm:grid-cols-[1fr_auto] sm:items-end">
          <p className="mb-0 max-w-[54ch] text-base leading-relaxed text-muted-foreground md:text-lg">
            Soy Javier, frontend engineer enfocado en interfaces claras, sistemas sólidos y equipos que puedan entregar con confianza.
          </p>
          <div className="flex flex-wrap items-center gap-5">
            <a href="#experience" className="button-primary whitespace-nowrap">
              Ver experiencia
            </a>
            <a
              href="https://github.com/JaviCeRodriguez"
              target="_blank"
              rel="noopener noreferrer"
              className="text-link whitespace-nowrap"
            >
              GitHub ↗
            </a>
          </div>
        </div>
      </div>

      <div className="reveal reveal-delay-2 relative md:col-span-5 lg:col-span-4">
        <div className="absolute -left-3 -top-3 h-full w-full rounded-xl bg-accent sm:-left-5 sm:-top-5" aria-hidden="true" />
        <div className="relative overflow-hidden rounded-xl bg-surface">
          <Image
            src="/mate-mac.jpg"
            alt="Javier Rodriguez trabajando con su notebook y un mate"
            width={704}
            height={1120}
            className="aspect-[4/5] w-full object-cover object-top grayscale-[18%] transition duration-700 hover:scale-[1.025] hover:grayscale-0 md:aspect-[3/4]"
            sizes="(max-width: 767px) calc(100vw - 2rem), 34vw"
            priority
          />
        </div>
      </div>

      <div className="col-span-full grid gap-6 border-t border-border pt-6 md:grid-cols-12">
        <p className="font-mono text-xs text-muted-foreground md:col-span-3">Actualmente en Incubator</p>
        <p className="mb-0 max-w-[68ch] text-lg leading-relaxed md:col-span-8 md:col-start-5 md:text-xl">
          Autodidacta y estudiante de Programación en la UTN, con experiencia en ciencia de datos, docencia, comunidades, QA y resolución práctica de problemas técnicos.
        </p>
      </div>
    </section>
  );
}
