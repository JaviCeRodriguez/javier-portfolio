import React from "react";
// import Card from "@/components/card.astro";

export interface BookmarkLink {
  url: string;
  title: string;
}

export interface BookmarkSection {
  category: string;
  links: BookmarkLink[];
}

interface BookmarksListProps {
  bookmarks: BookmarkSection[];
  title: string;
}

function getDomain(url: string): string {
  try {
    return new URL(url).hostname;
  } catch {
    return "";
  }
}

export const BookmarksList: React.FC<BookmarksListProps> = ({
  bookmarks,
  title,
}) => (
  <>
    <h1 className="text-3xl font-bold mb-10">{title}</h1>
    <section className="space-y-4">
      {bookmarks.map((section) => (
        <div
          className="flex flex-col gap-2 bg-transparent hover:bg-neutral-800 border border-slate-500 hover:border-slate-300 transition-all duration-300 rounded-md p-4"
          key={section.category}
        >
          <h4 className="text-xl font-bold">{String(section.category)}</h4>
          <ul className="space-y-2">
            {section.links.map((link) => (
              <li className="flex items-center gap-2" key={link.url}>
                <img
                  src={`https://www.google.com/s2/favicons?domain=${getDomain(
                    link.url
                  )}&sz=16`}
                  alt="favicon"
                  className="w-5 h-5 rounded"
                  loading="lazy"
                />
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline font-medium"
                >
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  </>
);
