import Image from "next/image"

export function Hero() {
  return (
    <section id="about">
      <div className="flex flex-col sm:flex-row gap-6 items-start mb-6">
        <div className="flex-shrink-0">
          <Image
            src="/mate-mac.jpg"
            alt="Javier Rodriguez"
            width={140}
            height={140}
            className="rounded-sm object-cover"
            priority
          />
        </div>
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold mb-1">
            Javier Rodriguez — Personal Home Page
          </h1>
          <p className="text-muted-foreground text-sm mb-3 italic">
            &ldquo;Curiosity-driven, mate in hand.&rdquo;
          </p>
          <h2 className="text-base font-semibold mb-2">Who I Am</h2>
          <p>
            I am a <strong>Tech Lead Frontend Engineer</strong> currently working at{" "}
            <a href="https://incubator.com.ar" target="_blank" rel="noopener noreferrer">
              Incubator
            </a>
            . I specialize in{" "}
            <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
              React
            </a>
            ,{" "}
            <a href="https://typescriptlang.org" target="_blank" rel="noopener noreferrer">
              TypeScript
            </a>
            , and{" "}
            <a href="https://nextjs.org" target="_blank" rel="noopener noreferrer">
              Next.js
            </a>
            . See also my{" "}
            <a href="#experience">work experience</a>,{" "}
            <a href="#skills">skills</a>,{" "}
            <a href="/blog">blog</a>, and{" "}
            <a href="#contact">contact</a>.
          </p>
          <p>
            I am self-taught and currently studying Technical Programming at{" "}
            <strong>UTN</strong>. I also have a background in Data Science and{" "}
            occasionally teach programming — I was a Teaching Assistant for
            Programming 1 at{" "}
            <a href="https://www.unsam.edu.ar/" target="_blank" rel="noopener noreferrer">
              Universidad Nacional de San Martín
            </a>
            . When not coding, you&rsquo;ll find me with friends sharing <em>mate</em>.
          </p>
          <p>
            I previously volunteered at{" "}
            <a href="https://frontendcafe.la" target="_blank" rel="noopener noreferrer">
              FrontendCafé
            </a>{" "}
            as a community staff member and Python study group coordinator.
          </p>
        </div>
      </div>
      <hr />
    </section>
  )
}
