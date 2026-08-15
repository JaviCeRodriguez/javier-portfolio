"use client";

import { useEffect, useRef } from "react";

interface MermaidContentProps {
  html: string;
}

export function MermaidContent({ html }: MermaidContentProps) {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const content = contentRef.current;
    if (!content) return;

    async function renderDiagrams(root: HTMLDivElement) {
      const mermaidBlocks: Array<{ container: HTMLElement; source: string }> = [];
      const codeBlocks = Array.from(root.querySelectorAll<HTMLElement>("pre > code"));

      for (const codeBlock of codeBlocks) {
        const codeContainer = codeBlock.parentElement;
        const source = codeBlock.textContent?.trim();
        if (!source || !codeContainer) continue;

        const directive = source.match(/^@render\s+([a-z0-9-]+)\s*(?:\r?\n|$)/i);
        const renderType = directive?.[1].toLowerCase() ?? (codeBlock.classList.contains("language-mermaid") ? "mermaid" : null);
        const contentWithoutDirective = directive ? source.slice(directive[0].length).trim() : source;

        if (renderType === "table") {
          renderTable(codeContainer, contentWithoutDirective);
          continue;
        }

        if (renderType === "mermaid") {
          mermaidBlocks.push({ container: codeContainer, source: contentWithoutDirective });
          continue;
        }

        if (directive) {
          codeBlock.textContent = contentWithoutDirective;
          codeBlock.classList.add(`language-${renderType}`);
        }
      }

      if (mermaidBlocks.length === 0) return;

      const mermaid = (await import("mermaid")).default;
      mermaid.initialize({ startOnLoad: false, securityLevel: "strict" });

      for (const [index, { container, source }] of mermaidBlocks.entries()) {
        const diagram = document.createElement("div");
        diagram.className = "mermaid";
        diagram.id = `mermaid-diagram-${index}`;
        diagram.textContent = source;
        container.replaceWith(diagram);

        try {
          await mermaid.run({ nodes: [diagram] });
        } catch {
          const fallback = document.createElement("pre");
          const fallbackCode = document.createElement("code");
          fallback.className = "mermaid-fallback";
          fallbackCode.className = "language-mermaid";
          fallbackCode.textContent = source;
          fallback.append(fallbackCode);
          diagram.replaceWith(fallback);
        }
      }
    }

    void renderDiagrams(content);
  }, [html]);

  return <div ref={contentRef} dangerouslySetInnerHTML={{ __html: html }} />;
}

function renderTable(codeContainer: HTMLElement, source: string) {
  const rows = source
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter(Boolean)
    .map(toCells);

  if (rows.length < 3 || !isDividerRow(rows[1]) || rows.some((row) => row.length !== rows[0].length)) {
    return;
  }

  const wrapper = document.createElement("div");
  wrapper.className = "table-wrapper";
  const table = document.createElement("table");
  const thead = document.createElement("thead");
  const headerRow = document.createElement("tr");

  for (const cell of rows[0]) {
    const header = document.createElement("th");
    header.scope = "col";
    header.textContent = cell;
    headerRow.append(header);
  }

  thead.append(headerRow);
  table.append(thead);

  const tbody = document.createElement("tbody");
  for (const cells of rows.slice(2)) {
    const row = document.createElement("tr");
    for (const cell of cells) {
      const data = document.createElement("td");
      data.textContent = cell;
      row.append(data);
    }
    tbody.append(row);
  }

  table.append(tbody);
  wrapper.append(table);
  codeContainer.replaceWith(wrapper);
}

function toCells(line: string) {
  return line
    .replace(/^\|/, "")
    .replace(/\|$/, "")
    .split("|")
    .map((cell) => cell.trim());
}

function isDividerRow(cells: string[]) {
  return cells.every((cell) => /^:?-{3,}:?$/.test(cell));
}
