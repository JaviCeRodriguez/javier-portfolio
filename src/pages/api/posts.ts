import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const {
    query: { limit = 6, page = 1 },
    method
  } = req;

  switch (method) {
    case "GET":
      const headers = new Headers();
      headers.append("api-key", `${process.env.NEXT_PUBLIC_DEV_TO_API_KEY}`);
      const response = await fetch(
        `https://dev.to/api/articles/me?per_page=${limit}&page=${page}`,
        { headers }
      );
      const data = await response.json();
      res.status(200).json({ data, "total": data.length, page });
      break;
    default:
      res.status(405).json({ code: "method/not-allowed" ,error: "Method not allowed" });
  }
}