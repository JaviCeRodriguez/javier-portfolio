"use client";

import { useEffect, useState } from "react";
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

const BlogCardsGrid = ({ pages }: any) => {
  const [blogs, setBlogs] = useState<any[] | null>(null);

  useEffect(() => {
    setBlogs(pages);
  }, [pages]);

  if (!blogs) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 grid-flow-row gap-4">
        {Array.from({ length: 3 }).map((_, i) => (
          <Card key={i} className="p-6">
            <div className="relative w-full h-36 mb-2">
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
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 grid-flow-row gap-4">
      {blogs.map((blog: any) => (
        <Link
          href={`/blog/${
            (blog.properties as any).Slug.rich_text[0].plain_text
          }`}
          key={blog.id}
        >
          <Card>
            <CardHeader>
              <div className="relative w-full h-36">
                <Image
                  src={(blog.cover as any).external.url}
                  alt=""
                  fill
                  style={{
                    objectFit: "cover",
                    objectPosition: "center",
                  }}
                />
              </div>
              <CardTitle>
                {(blog.properties.Title as any).title[0].plain_text}
              </CardTitle>
              <CardDescription className="flex flex-col gap-2">
                <span>
                  {(blog.properties.Description as any).rich_text[0].plain_text}
                </span>

                <span className="flex flex-wrap gap-1">
                  {(blog.properties.Tags as any).multi_select.map(
                    (tag: any) => (
                      <Badge
                        key={tag.name}
                        style={{
                          backgroundColor: tag.color,
                        }}
                      >
                        {tag.name}
                      </Badge>
                    )
                  )}
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
