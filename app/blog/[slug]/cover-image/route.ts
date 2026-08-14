import { getBlogPostBySlug } from "@/lib/notion";

export const dynamic = "force-dynamic";

export async function GET(_request: Request, { params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  try {
    const post = await getBlogPostBySlug(slug);

    if (!post?.coverImage) {
      return new Response(null, { status: 404 });
    }

    const imageResponse = await fetch(post.coverImage, { cache: "no-store" });

    if (!imageResponse.ok || !imageResponse.body) {
      return new Response(null, { status: 502 });
    }

    return new Response(imageResponse.body, {
      headers: {
        "Cache-Control": "public, max-age=300, s-maxage=300, stale-while-revalidate=60",
        "Content-Type": imageResponse.headers.get("content-type") ?? "image/jpeg",
        "X-Content-Type-Options": "nosniff",
      },
    });
  } catch {
    return new Response(null, { status: 502 });
  }
}
