export interface Frontmatter {
  date: string;
  metaDesc: string;
  metaTitle: string;
  socialImage: string;
  tags: string[];
  title: string;
}

export interface Post {
  frontmatter: Frontmatter;
  slug: string;
}