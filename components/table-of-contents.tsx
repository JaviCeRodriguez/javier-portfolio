"use client";

import { useEffect, useState } from "react";
import { List } from "lucide-react";

interface Heading {
  id: string;
  text: string;
  level: number;
}

interface TableOfContentsProps {
  blocks: any[];
}

export function TableOfContents({ blocks }: TableOfContentsProps) {
  const [headings, setHeadings] = useState<Heading[]>([]);
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    // Extract headings from blocks
    const extractedHeadings: Heading[] = [];

    blocks.forEach((block) => {
      if (
        block.type === "heading_1" ||
        block.type === "heading_2" ||
        block.type === "heading_3"
      ) {
        const text = block[block.type].rich_text
          .map((t: any) => t.plain_text)
          .join("");
        const level = Number.parseInt(block.type.split("_")[1]);
        extractedHeadings.push({
          id: block.id,
          text,
          level,
        });
      }
    });

    setHeadings(extractedHeadings);
  }, [blocks]);

  useEffect(() => {
    // Observe heading intersections for active state
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-100px 0px -80% 0px" }
    );

    headings.forEach((heading) => {
      const element = document.getElementById(heading.id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, [headings]);

  const handleClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const top = element.offsetTop - 100;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  if (headings.length === 0) {
    return null;
  }

  return (
    <aside className="hidden xl:block fixed right-8 top-32 w-64 max-h-[calc(100vh-200px)] overflow-y-auto">
      <div className="sticky top-0 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border border-border rounded-lg p-4">
        <div className="flex items-center gap-2 mb-3 text-sm font-semibold text-foreground">
          <List className="w-4 h-4" />
          <span>On this page</span>
        </div>
        <nav>
          <ul className="space-y-2 text-sm">
            {headings.map((heading) => (
              <li
                key={heading.id}
                style={{ paddingLeft: `${(heading.level - 1) * 12}px` }}
                className="transition-all"
              >
                <button
                  onClick={() => handleClick(heading.id)}
                  className={`text-left w-full hover:text-accent transition-colors ${
                    activeId === heading.id
                      ? "text-accent font-medium"
                      : "text-muted-foreground"
                  }`}
                >
                  {heading.text}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </aside>
  );
}
