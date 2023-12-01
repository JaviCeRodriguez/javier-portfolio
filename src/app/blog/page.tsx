import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getPages, notionClient } from "@/utils/notion";
import Image from "next/image";
import Link from "next/link";

export default async function Page() {
  const pages = await getPages();
  console.log(pages);
  return (
    <div className="grid grid-cols-3 grid-flow-row gap-4">
      {pages.map((page) => (
        <Link
          href={`/blog/${
            (page.properties as any).Slug.rich_text[0].plain_text
          }`}
          key={page.id}
        >
          <Card>
            <CardHeader>
              <div className="relative w-full h-36">
                <Image
                  src={(page.cover as any).external.url}
                  alt=""
                  fill
                  style={{
                    objectFit: "cover",
                    objectPosition: "center",
                  }}
                />
              </div>
              <CardTitle>
                {(page.properties.Title as any).title[0].plain_text}
              </CardTitle>
              <CardDescription>
                {(page.properties.Description as any).rich_text[0].plain_text}

                <div>
                  {(page.properties.Tags as any).multi_select.map(
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
                </div>
              </CardDescription>
            </CardHeader>
          </Card>
        </Link>
      ))}
    </div>
  );
}
