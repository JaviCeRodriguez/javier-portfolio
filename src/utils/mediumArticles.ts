import "server-only";

export type Article = {
  title: string;
  link: string;
  imgCover: string;
  description: string;
  categories: string[];
  guid: string;
};

export const getMediumArticles = async () => {
  try {
    const response = await fetch(
      "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@javicerodriguez"
    );
    const feed = await response.json();

    const imgCoverRegex = /<img[^>]+src="([^">]+)"/;
    const paragraphRegex = /<p>(.*?)<\/p>/;

    const articles: Article[] = feed.items.map((item: any) => {
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

    return { message: "Success", data: articles };
  } catch (err) {
    return { message: "Internal server error", data: null };
  }
};
