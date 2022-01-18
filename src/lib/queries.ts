import { groq } from 'next-sanity';

export const postsQuery = groq`
  *[_type == "post"] {
    _id,
    'slug': slug.current,
    title,
    subtitle,
    'mainImage': mainImage.asset->url,
  }
`

export const postQuery = groq`
  *[_type == "post"] {
    _id,
    _createdAt,
    'slug': slug.current,
    title,
    subtitle,
    'mainImage': mainImage.asset->url,
    body
  }
`

export const projectsQuery = groq`
  *[_type == "project"] {
    _id,
    project,
    description,
    'mainImage': mainImage.asset->url,
    demo,
    repository
  }
`