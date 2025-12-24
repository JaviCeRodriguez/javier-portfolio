"use client"

import type React from "react"

import { Fragment } from "react"

interface NotionRendererProps {
  blocks: any[]
}

export function NotionRenderer({ blocks }: NotionRendererProps) {
  return (
    <div className="notion-content space-y-4">
      {blocks.map((block) => (
        <NotionBlock key={block.id} block={block} />
      ))}
    </div>
  )
}

function NotionBlock({ block }: { block: any }) {
  const { type, id } = block

  switch (type) {
    case "paragraph":
      return (
        <p className="text-foreground leading-relaxed">
          <RichText text={block.paragraph.rich_text} />
        </p>
      )

    case "heading_1":
      return (
        <h1 className="text-3xl md:text-4xl font-bold text-foreground mt-8 mb-4">
          <RichText text={block.heading_1.rich_text} />
        </h1>
      )

    case "heading_2":
      return (
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-6 mb-3">
          <RichText text={block.heading_2.rich_text} />
        </h2>
      )

    case "heading_3":
      return (
        <h3 className="text-xl md:text-2xl font-bold text-foreground mt-4 mb-2">
          <RichText text={block.heading_3.rich_text} />
        </h3>
      )

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
      )

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
      )

    case "code":
      const language = block.code.language || "text"
      const code = block.code.rich_text.map((t: any) => t.plain_text).join("")

      return (
        <div className="my-6 rounded-lg overflow-hidden bg-[#1e1e2e] border border-[#313244]">
          <div className="flex items-center justify-between px-4 py-2 bg-[#181825] border-b border-[#313244]">
            <span className="text-xs text-[#cdd6f4] font-mono uppercase tracking-wider">{language}</span>
          </div>
          <pre className="p-6 overflow-x-auto">
            <code className="text-sm font-mono text-[#cdd6f4] leading-relaxed whitespace-pre">{code}</code>
          </pre>
        </div>
      )

    case "quote":
      return (
        <blockquote className="border-l-4 border-accent pl-4 py-2 my-4 italic text-muted-foreground">
          <RichText text={block.quote.rich_text} />
        </blockquote>
      )

    case "divider":
      return <hr className="my-8 border-border" />

    case "image":
      const imageUrl = block.image.file?.url || block.image.external?.url
      const caption = block.image.caption?.[0]?.plain_text

      return (
        <figure className="my-6">
          <img src={imageUrl || "/placeholder.svg"} alt={caption || "Blog image"} className="w-full rounded-lg" />
          {caption && <figcaption className="text-sm text-muted-foreground text-center mt-2">{caption}</figcaption>}
        </figure>
      )

    case "callout":
      return (
        <div className="flex gap-3 p-4 my-4 bg-muted rounded-lg border border-border">
          {block.callout.icon?.emoji && <span className="text-2xl">{block.callout.icon.emoji}</span>}
          <div className="flex-1">
            <RichText text={block.callout.rich_text} />
          </div>
        </div>
      )

    case "toggle":
      return (
        <details className="my-2 p-4 bg-muted/50 rounded-lg">
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
      )

    default:
      return null
  }
}

function RichText({ text }: { text: any[] }) {
  if (!text || text.length === 0) {
    return null
  }

  return (
    <>
      {text.map((value: any, index: number) => {
        const {
          annotations: { bold, italic, strikethrough, underline, code, color },
          plain_text,
          href,
        } = value

        let element: React.ReactNode = plain_text

        if (code) {
          element = (
            <code className="px-2 py-1 bg-[#1e1e2e] text-[#89b4fa] rounded text-[0.9em] font-mono border border-[#313244]">
              {element}
            </code>
          )
        }

        if (bold) {
          element = <strong className="font-bold">{element}</strong>
        }

        if (italic) {
          element = <em className="italic">{element}</em>
        }

        if (strikethrough) {
          element = <s className="line-through">{element}</s>
        }

        if (underline) {
          element = <u className="underline">{element}</u>
        }

        if (href) {
          element = (
            <a
              href={href}
              className="text-[#89b4fa] hover:text-[#74c7ec] hover:underline transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              {element}
            </a>
          )
        }

        return <Fragment key={index}>{element}</Fragment>
      })}
    </>
  )
}
