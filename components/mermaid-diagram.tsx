"use client";

import { useEffect, useId, useRef, useState } from "react";

interface MermaidDiagramProps {
  chart: string;
  caption?: string;
}

let mermaidInitialized = false;
let renderQueue: Promise<unknown> = Promise.resolve();

function enqueueRender<T>(task: () => Promise<T>): Promise<T> {
  const result = renderQueue.then(task, task);
  renderQueue = result.then(
    () => undefined,
    () => undefined,
  );
  return result;
}

export function MermaidDiagram({ chart, caption }: MermaidDiagramProps) {
  const reactId = useId();
  const containerRef = useRef<HTMLDivElement>(null);
  const [error, setError] = useState<string | null>(null);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    let cancelled = false;

    async function renderDiagram() {
      setError(null);
      setIsReady(false);

      try {
        const { default: mermaid } = await import("mermaid");

        if (!mermaidInitialized) {
          mermaid.initialize({
            startOnLoad: false,
            securityLevel: "strict",
            theme: "base",
            fontFamily: "Manrope, Arial, sans-serif",
            themeVariables: {
              background: "#faf7f2",
              primaryColor: "#fff1df",
              primaryTextColor: "#292522",
              primaryBorderColor: "#d5672e",
              lineColor: "#786f67",
              secondaryColor: "#f2e7d8",
              tertiaryColor: "#faf7f2",
              clusterBkg: "#faf7f2",
              clusterBorder: "#c9b9a8",
              noteBkgColor: "#fff1df",
              noteBorderColor: "#d5672e",
              noteTextColor: "#292522",
            },
          });
          mermaidInitialized = true;
        }

        const diagramId = `mermaid-${reactId.replace(/[^a-zA-Z0-9_-]/g, "")}`;
        const { svg, bindFunctions } = await enqueueRender(() =>
          mermaid.render(diagramId, chart),
        );

        if (cancelled || !containerRef.current) {
          return;
        }

        containerRef.current.innerHTML = svg;
        bindFunctions?.(containerRef.current);
        setIsReady(true);
      } catch (renderError) {
        if (cancelled) {
          return;
        }

        console.error("Unable to render Mermaid diagram", renderError);
        setError("No pudimos renderizar este diagrama.");
      }
    }

    void renderDiagram();

    return () => {
      cancelled = true;
      if (containerRef.current) {
        containerRef.current.innerHTML = "";
      }
    };
  }, [chart, reactId]);

  return (
    <figure className="my-10">
      <p className="mb-2 font-mono text-xs text-muted-foreground sm:hidden">
        Deslizá horizontalmente para recorrer el diagrama.
      </p>
      <div
        role="region"
        aria-label={caption ? `Diagrama: ${caption}` : "Diagrama Mermaid"}
        tabIndex={0}
        className="overflow-x-auto rounded-xl border border-border bg-card p-4 sm:p-6"
      >
        {!isReady && !error && (
          <p className="py-10 text-center font-mono text-sm text-muted-foreground">
            Renderizando diagrama…
          </p>
        )}
        {error ? (
          <div>
            <p className="mb-3 text-sm font-medium text-foreground">{error}</p>
            <pre className="overflow-x-auto rounded-md bg-muted p-4">
              <code className="font-mono text-sm text-foreground">{chart}</code>
            </pre>
          </div>
        ) : (
          <div
            ref={containerRef}
            role="img"
            aria-label={caption || "Diagrama Mermaid"}
            className={
              isReady
                ? "[&_svg]:h-auto [&_svg]:w-full [&_svg]:min-w-[42rem]"
                : "hidden"
            }
          />
        )}
      </div>
      {caption && (
        <figcaption className="mt-3 text-center text-sm text-muted-foreground">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
