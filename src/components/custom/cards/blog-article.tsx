"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Article } from "@/hooks/use-articles";
import { Button } from "@/components/ui/button";
import { CalendarDays, MessageCircle, ThumbsUp, Clock } from "lucide-react";

export const BlogArticle = ({ article }: { article: Article }) => {
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <Card className="flex flex-col h-full">
      <CardHeader className="p-0">
        <CardTitle className="p-4 text-lg">{article.title}</CardTitle>
        {article.cover_image && (
          <Image
            src={article.cover_image}
            alt={article.title}
            width={300}
            height={200}
            className="object-cover w-full h-48"
          />
        )}
      </CardHeader>
      <CardContent className="flex-grow p-4">
        <p className="mb-4 text-sm text-gray-600">{article.description}</p>
        <div className="flex items-center gap-2 mb-4">
          <Image
            src={article.user.profile_image}
            alt={article.user.name}
            width={24}
            height={24}
            className="rounded-full"
          />
          <span className="text-sm font-medium">{article.user.name}</span>
        </div>
        <div className="grid grid-cols-2 gap-2 text-sm text-gray-500">
          <div className="flex items-center">
            <CalendarDays className="w-4 h-4 mr-1" />
            <span>{formatDate(article.published_at)}</span>
          </div>
          <div className="flex items-center">
            <Clock className="w-4 h-4 mr-1" />
            <span>{article.reading_time_minutes} min read</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="px-4">
        <Button asChild className="w-full">
          <a href={article.url} target="_blank" rel="noopener noreferrer">
            Read More
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
};
