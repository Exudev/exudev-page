import React from "react";
import Image from "next/image";

interface CardProps {
  imageSrc: string;
  url: string;
  title: string;
  description: string;
}

export const Card: React.FC<CardProps> = ({ title,url,imageSrc ,description }) => {
  return (
    <a href={url}>
 <div className="max-w-sm rounded overflow-hidden shadow-lg">
  <div className="flex justify-center items-center">
    <Image
      src={imageSrc}
      alt=""
      width={350}
      height={350}
      className=""
    />
  </div>
  <div className="px-6 py-4">
    <div className="font-bold text-xl mb-2  dark:text-white">{title}</div>
    <p className="text-gray-700 text-base  dark:text-white">{description}</p>
  </div>
</div>

    </a>
  );
};

export default Card;
