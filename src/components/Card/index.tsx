import React from "react";
import Image from "next/image";
import Button from "../Button";

interface CardProps {
  title: string;
  description: string;
  image: string;
  demo: string;
  repository: string;
}

const Card: React.FC<CardProps> = ({ title, description, image, demo, repository }) => {
  return (
    <>
      <div
        className="w-72 m-4 flex flex-col items-center py-4 border border-fireOpal rounded-md
        "
      >
        <div className="relative w-56 h-36 rounded-md overflow-hidden">
          <Image src={image} alt="sarasa" layout="fill" objectFit="cover" />
        </div>
        <h2 className="px-4 mt-3 w-full text-white font-semibold text-base">
          {title.toUpperCase()}
        </h2>
        <p className="px-4 w-full text-languidLavender text-sm">
          {description}
        </p>
        <div className="w-full flex justify-evenly mt-4">
          <Button
            text="Ver DEMO"
            link={demo}
            type={true}
          />
          <Button
            text="Repositorio"
            link={repository}
            type={false}
          />
        </div>
      </div>
    </>
  );
};

export default Card;
