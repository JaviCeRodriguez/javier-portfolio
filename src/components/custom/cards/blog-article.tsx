"use client";

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
import { CalendarDays, Clock } from "lucide-react";

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
    <Card className="flex flex-col h-full gap-4 p-4">
      <CardHeader className="p-0">
        <CardTitle className="text-lg">{article.title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow p-0">
        <p className="mb-4 text-sm text-gray-600">{article.description}</p>
        <div className="flex gap-8 text-sm text-gray-500">
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
      <CardFooter className="p-0">
        <Button asChild className="w-full">
          <a href={article.url} target="_blank" rel="noopener noreferrer">
            Read More
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
};
