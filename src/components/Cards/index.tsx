import React from "react";
import { useRouter } from "next/router";
import { Card, Row, Text } from "@nextui-org/react";
import { Post } from "@/utils/types";

const PostCard: React.FC<{ post: Post }> = ({ post }) => {
  const router = useRouter();

  const getDate = (date: string) => {
    const dateObj = new Date(date);
    const day = dateObj.getDate();
    const month = dateObj.getMonth() + 1;
    const year = dateObj.getFullYear();

    return `${day}/${month}/${year}`;
  };

  return (
    <a target="_blank" href={post.canonical_url} rel="noopener noreferrer">
      <Card
        hoverable
        clickable
        // onClick={() => router.push(`/blog/${post.slug}}`)}
        css={{
          margin: "1rem 0",
          border: "2px solid $accents2",
          "@xs": {
            maxWidth: "300px",
          },
          "@sm": {
            maxWidth: "300px",
          },
          "@md": {
            maxWidth: "380px",
          },
        }}
      >
        <Card.Body css={{ p: 0 }}>
          <Card.Image
            objectFit="cover"
            src={post.cover_image}
            width="100%"
            height={140}
            alt={post.title}
          />
        </Card.Body>
        <Card.Footer css={{ backgroundColor: "$accents1" }}>
          <Row wrap="wrap" justify="space-between">
            <Text b>{post.title}</Text>
            <Text css={{ color: "$accents4", fontWeight: "$semibold" }}>
              {getDate(post.published_at)}
            </Text>
          </Row>
        </Card.Footer>
      </Card>
    </a>
  );
};

export default PostCard;
