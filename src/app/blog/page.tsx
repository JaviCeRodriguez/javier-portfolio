import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getPages, notionClient } from "@/utils/notion";
import Image from "next/image";

export default async function Page() {
  const pages = await getPages();
  console.log(pages);
  return (
    <div className="flex flex-col">
      {pages.map((page) => (
        <Card key={page.id}>
          <CardHeader>
            <div className="relative w-full h-36">
              <Image
                src={page.cover.external.url}
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
                {(page.properties.Tags as any).multi_select.map((tag: any) => (
                  <Badge
                    key={tag.name}
                    style={{
                      backgroundColor: tag.color,
                    }}
                  >
                    {tag.name}
                  </Badge>
                ))}
              </div>
            </CardDescription>
          </CardHeader>
        </Card>
      ))}
    </div>
  );
}
