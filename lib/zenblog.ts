import { createZenblogClient } from "zenblog";

interface ZenblogPost {
  title: string;
  slug: string;
  published_at: string;
  excerpt?: string;
  cover_image?: string;
}

export interface BlogPost {
  title: string;
  slug: string;
  date: string;
  excerpt: string;
  coverImage?: string;
}

export interface BlogPostWithContent extends BlogPost {
  htmlContent: string;
}

function getZenblogClient() {
  const blogId = process.env.ZENBLOG_BLOG_ID;

  if (!blogId) {
    throw new Error("ZENBLOG_BLOG_ID no está configurado.");
  }

  return createZenblogClient({ blogId });
}

function toBlogPost(post: ZenblogPost): BlogPost {
  return {
    title: post.title,
    slug: post.slug,
    date: post.published_at,
    excerpt: post.excerpt ?? "",
    coverImage: post.cover_image,
  };
}

export async function getBlogPosts(): Promise<BlogPost[]> {
  const { data } = await getZenblogClient().posts.list();
  return data.map(toBlogPost);
}

export async function getPostBySlug(slug: string): Promise<BlogPostWithContent | null> {
  try {
    const { data } = await getZenblogClient().posts.get({ slug });

    return {
      ...toBlogPost(data),
      htmlContent: data.html_content,
    };
  } catch (error) {
    if (error instanceof Error && /404/.test(error.message)) {
      return null;
    }

    throw error;
  }
}
