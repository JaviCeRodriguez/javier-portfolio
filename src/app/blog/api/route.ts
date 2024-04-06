import type { NextApiResponse } from "next";

export type Article = {
  title: string;
  link: string;
  imgCover: string;
  description: string;
  categories: string[];
  guid: string;
};

type ResponseData = {
  message: string;
  data: Article[] | null;
};

export default async function GET(res: NextApiResponse<ResponseData>) {
  try {
    const response = await fetch(
      "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@javicerodriguez"
    );
    const feed = await response.json();

    const imgCoverRegex = /<img[^>]+src="([^">]+)"/;
    const paragraphRegex = /<p>(.*?)<\/p>/;

    const articles = feed.items.map((item: any) => {
      const imgCoverMatch = item.content.match(imgCoverRegex);
      const descriptionMatch = item.content.match(paragraphRegex);

      return {
        title: item.title,
        link: item.link,
        imgCover: imgCoverMatch ? imgCoverMatch[1] : "",
        description: descriptionMatch ? descriptionMatch[1] : "",
        categories: item.categories,
        guid: item.guid.split("/").pop(),
      };
    });

    console.log(articles);
    res.status(200).json({ message: "Success", data: articles });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal server error", data: null });
  }
}
