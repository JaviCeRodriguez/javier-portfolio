import type React from "react";

import { Fragment } from "react";
import { MermaidDiagram } from "@/components/mermaid-diagram";

interface NotionRendererProps {
  blocks: any[];
}

export function NotionRenderer({ blocks }: NotionRendererProps) {
  return (
    <div className="notion-content space-y-5">
      {blocks.map((block) => (
        <NotionBlock key={block.id} block={block} />
      ))}
    </div>
  );
}

function NotionBlock({ block }: { block: any }) {
  const { type, id } = block;

  switch (type) {
    case "paragraph":
      return (
        <p className="text-foreground leading-relaxed">
          <RichText text={block.paragraph.rich_text} />
        </p>
      );

    case "heading_1":
      return (
        <h1
          id={id}
          className="mt-14 mb-5 scroll-mt-28 text-4xl font-semibold text-foreground md:text-5xl"
        >
          <RichText text={block.heading_1.rich_text} />
        </h1>
      );

    case "heading_2":
      return (
        <h2
          id={id}
          className="mt-12 mb-4 scroll-mt-28 text-3xl font-semibold text-foreground md:text-4xl"
        >
          <RichText text={block.heading_2.rich_text} />
        </h2>
      );

    case "heading_3":
      return (
        <h3
          id={id}
          className="mt-9 mb-3 scroll-mt-28 text-2xl font-semibold text-foreground"
        >
          <RichText text={block.heading_3.rich_text} />
        </h3>
      );

    case "bulleted_list_item":
      return (
        <li className="ml-6 text-foreground leading-relaxed">
          <RichText text={block.bulleted_list_item.rich_text} />
          {block.children && (
            <ul className="list-disc ml-6 mt-2 space-y-1">
              {block.children.map((child: any) => (
                <NotionBlock key={child.id} block={child} />
              ))}
            </ul>
          )}
        </li>
      );

    case "numbered_list_item":
      return (
        <li className="ml-6 text-foreground leading-relaxed">
          <RichText text={block.numbered_list_item.rich_text} />
          {block.children && (
            <ol className="list-decimal ml-6 mt-2 space-y-1">
              {block.children.map((child: any) => (
                <NotionBlock key={child.id} block={child} />
              ))}
            </ol>
          )}
        </li>
      );

    case "table":
      return <NotionTable block={block} />;

    case "code":
      const language = block.code.language || "text";
      const code = block.code.rich_text.map((t: any) => t.plain_text).join("");
      const codeCaption = block.code.caption
        ?.map((text: any) => text.plain_text)
        .join("");

      if (language.toLowerCase() === "mermaid") {
        return <MermaidDiagram chart={code} caption={codeCaption} />;
      }

      return (
        <div className="my-8 overflow-hidden rounded-lg border border-border bg-muted/60">
          <div className="flex items-center justify-between border-b border-border px-4 py-2">
            <span className="font-mono text-xs text-muted-foreground">
              {language}
            </span>
          </div>
          <pre className="p-6 overflow-x-auto">
            <code className="whitespace-pre font-mono text-sm leading-relaxed text-foreground">
              {code}
            </code>
          </pre>
        </div>
      );

    case "quote":
      return (
        <blockquote className="my-8 border-l-2 border-accent py-2 pl-6 text-xl font-medium text-foreground">
          <RichText text={block.quote.rich_text} />
          {block.children && block.children.length > 0 && (
            <div className="mt-2 space-y-2">
              {block.children.map((child: any) => (
                <NotionBlock key={child.id} block={child} />
              ))}
            </div>
          )}
        </blockquote>
      );

    case "divider":
      return <hr className="my-8 border-border" />;

    case "image":
      const imageUrl = block.image.file?.url || block.image.external?.url;
      const caption = block.image.caption?.[0]?.plain_text;

      return (
        <figure className="my-6">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={imageUrl || "/placeholder.svg"}
            alt={caption || "Imagen del artículo"}
            className="w-full rounded-xl"
          />
          {caption && (
            <figcaption className="text-sm text-muted-foreground text-center mt-2">
              {caption}
            </figcaption>
          )}
        </figure>
      );

    case "callout":
      return (
        <div className="my-6 flex gap-3 rounded-lg border-l-2 border-accent bg-muted/60 p-5">
          {block.callout.icon?.emoji && (
            <span className="text-2xl">{block.callout.icon.emoji}</span>
          )}
          <div className="flex-1">
            <RichText text={block.callout.rich_text} />
            {block.children && block.children.length > 0 && (
              <div className="mt-2 space-y-2">
                {block.children.map((child: any) => (
                  <NotionBlock key={child.id} block={child} />
                ))}
              </div>
            )}
          </div>
        </div>
      );

    case "toggle":
      return (
        <details className="my-4 rounded-lg border border-border bg-muted/40 p-5">
          <summary className="cursor-pointer font-medium text-foreground">
            <RichText text={block.toggle.rich_text} />
          </summary>
          {block.children && (
            <div className="mt-4 pl-4 space-y-2">
              {block.children.map((child: any) => (
                <NotionBlock key={child.id} block={child} />
              ))}
            </div>
          )}
        </details>
      );

    default:
      return null;
  }
}

function NotionTable({ block }: { block: any }) {
  const rows = block.children?.filter(
    (child: any) => child.type === "table_row",
  );

  if (!rows?.length) {
    return null;
  }

  const hasColumnHeader = block.table.has_column_header;
  const hasRowHeader = block.table.has_row_header;

  return (
    <div className="my-8">
      <p className="mb-2 font-mono text-xs text-muted-foreground md:hidden">
        Deslizá horizontalmente para recorrer la tabla.
      </p>
      <div
        className="overflow-x-auto rounded-xl border border-border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
        tabIndex={0}
      >
        <table className="w-full min-w-[44rem] border-collapse text-left text-sm leading-relaxed">
          <tbody>
            {rows.map((row: any, rowIndex: number) => (
              <tr
                key={row.id}
                className="border-b border-border last:border-b-0"
              >
                {row.table_row.cells.map(
                  (cell: any[], cellIndex: number) => {
                    const isColumnHeader = hasColumnHeader && rowIndex === 0;
                    const isRowHeader = hasRowHeader && cellIndex === 0;
                    const Cell = isColumnHeader || isRowHeader ? "th" : "td";

                    return (
                      <Cell
                        key={`${row.id}-${cellIndex}`}
                        scope={
                          isColumnHeader
                            ? "col"
                            : isRowHeader
                              ? "row"
                              : undefined
                        }
                        className={
                          isColumnHeader
                            ? "bg-muted px-4 py-3 font-semibold text-foreground"
                            : isRowHeader
                              ? "bg-muted/50 px-4 py-3 font-medium text-foreground"
                              : "px-4 py-3 align-top text-foreground"
                        }
                      >
                        <RichText text={cell} />
                      </Cell>
                    );
                  },
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function RichText({ text }: { text: any[] }) {
  if (!text || text.length === 0) {
    return null;
  }

  return (
    <>
      {text.map((value: any, index: number) => {
        const {
          annotations: { bold, italic, strikethrough, underline, code, color },
          plain_text,
          href,
        } = value;

        let element: React.ReactNode = plain_text;

        if (code) {
          element = (
            <code className="rounded-sm bg-muted px-1.5 py-0.5 font-mono text-[0.9em] text-accent">
              {element}
            </code>
          );
        }

        if (bold) {
          element = <strong className="font-bold">{element}</strong>;
        }

        if (italic) {
          element = <em className="italic">{element}</em>;
        }

        if (strikethrough) {
          element = <s className="line-through">{element}</s>;
        }

        if (underline) {
          element = <u className="underline">{element}</u>;
        }

        if (href) {
          element = (
            <a
              href={href}
              className="text-accent underline underline-offset-4 transition-colors hover:text-foreground"
              target="_blank"
              rel="noopener noreferrer"
            >
              {element}
            </a>
          );
        }

        return <Fragment key={index}>{element}</Fragment>;
      })}
    </>
  );
}
