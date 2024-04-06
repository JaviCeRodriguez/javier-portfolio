"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { Article } from "@/utils/mediumArticles";

const BlogCardsGrid = ({ articles }: { articles: Article[] | null }) => {
  if (!articles) {
    return (
      <div className="grid grid-flow-row grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {Array.from({ length: 3 }).map((_, i) => (
          <Card key={i + 1 - 1} className="p-6">
            <div className="relative w-full mb-2 h-36">
              <Skeleton className="w-full h-full" />
            </div>
            <div className="flex flex-col gap-2 mb-2">
              <Skeleton className="w-1/2 h-6" />
              <Skeleton className="w-full h-20" />
            </div>
            <div className="flex flex-row gap-1">
              <Skeleton className="w-1/4 h-4" />
              <Skeleton className="w-1/4 h-4" />
            </div>
          </Card>
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-flow-row grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
      {articles.map((article) => (
        <Link
          href={article.link}
          key={article.guid}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Card>
            <CardHeader>
              <div className="relative w-full h-36">
                <Image
                  src={article.imgCover}
                  alt=""
                  fill
                  style={{
                    objectFit: "cover",
                    objectPosition: "center",
                  }}
                  priority
                  sizes="(min-width: 640px) 640px, 100vw"
                />
              </div>
              <CardTitle>{article.title}</CardTitle>
              <CardDescription className="flex flex-col gap-2">
                <span>{article.description}</span>

                <span className="flex flex-wrap gap-1">
                  {article.categories.map((tag) => (
                    <Badge
                      key={tag}
                      className="bg-blue-800 dark:bg-blue-600 dark:text-white"
                    >
                      {tag}
                    </Badge>
                  ))}
                </span>
              </CardDescription>
            </CardHeader>
          </Card>
        </Link>
      ))}
    </div>
  );
};

export default BlogCardsGrid;
