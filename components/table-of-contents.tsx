"use client";

import { useEffect, useState } from "react";
import { List, X } from "lucide-react";
import { Button } from "@/components/ui/button";

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
  const [isMobileOpen, setIsMobileOpen] = useState(false);

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
    setIsMobileOpen(false);
  };

  if (headings.length === 0) {
    return null;
  }

  return (
    <>
      <Button
        onClick={() => setIsMobileOpen(true)}
        className="xl:hidden fixed bottom-6 right-6 z-40 rounded-full w-14 h-14 shadow-lg"
        size="icon"
      >
        <List className="w-6 h-6" />
      </Button>

      {isMobileOpen && (
        <div
          className="xl:hidden fixed inset-0 bg-black/50 z-50"
          onClick={() => setIsMobileOpen(false)}
        />
      )}

      <aside
        className={`xl:hidden fixed right-0 top-0 bottom-0 w-80 max-w-[85vw] bg-background border-l border-border z-50 transition-transform duration-300 ${
          isMobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-4 border-b border-border flex items-center justify-between">
          <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
            <List className="w-4 h-4" />
            <span>On this page</span>
          </div>
          <Button
            onClick={() => setIsMobileOpen(false)}
            variant="ghost"
            size="icon"
            className="h-8 w-8"
          >
            <X className="w-4 h-4" />
          </Button>
        </div>
        <nav className="p-4 overflow-y-auto max-h-[calc(100vh-80px)]">
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
      </aside>

      {/* Desktop fixed sidebar */}
      <aside className="hidden xl:block fixed right-8 top-32 w-64 max-h-[calc(100vh-200px)] overflow-y-auto">
        <div className="sticky top-0 bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60 border border-border rounded-lg p-4">
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
    </>
  );
}
