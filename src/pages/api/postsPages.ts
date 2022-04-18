import type { NextApiResponse } from "next";

interface postsPerPageQuery {
  limit: number;
}

interface postsPerPage {
  query: postsPerPageQuery;
  method: string;
}

export default async function handler(req: postsPerPage, res: NextApiResponse) {
  const {
    query: { limit = 6 },
    method
  } = req;

  switch (method) {
    case "GET":
      const headers = new Headers();
      headers.append("api-key", `${process.env.NEXT_PUBLIC_DEV_TO_API_KEY}`);
      const response = await fetch(
        `https://dev.to/api/articles/me`,
        { headers }
      );
      const data = await response.json();
      const totalPages = Math.ceil(data.length / limit);
      res.status(200).json({ totalPages, limit })
      break;
    default:
      res.status(405).json({ code: "method/not-allowed", error: "Method not allowed" });
  }
}