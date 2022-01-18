import React from "react";
import { useRouter } from "next/router";
import Image from "next/image";

interface PostCardProps {
  title: string;
  description: string;
  image: string;
  slug: string;
}

const PostCard: React.FC<PostCardProps> = ({
  title,
  description,
  image,
  slug,
}) => {
  const router = useRouter();

  return (
    <>
      <div className="w-64 lg:w-72 m-4 flex flex-col items-center py-4 border border-fireOpal rounded-md">
        <div className="relative w-11/12 h-36 rounded-md overflow-hidden">
          <Image src={image} alt="sarasa" layout="fill" objectFit="cover" />
        </div>
        <h2 className="mt-3 w-11/12 text-white font-semibold text-base">
          {title}
        </h2>
        <p className="w-11/12 text-languidLavender text-sm">{description}</p>
        <div className="w-full flex justify-evenly mt-4">
          <button
            className="btn btn-secondary w-11/12"
            type="button"
            onClick={() => router.push(`/blog/${slug}`)}
          >
            Ver post
          </button>
        </div>
      </div>
    </>
  );
};

export default PostCard;
