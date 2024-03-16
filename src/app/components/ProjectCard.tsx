import React from "react";
import Image from "next/image";

interface CardProps {
  imageSrc: string;
  url: string;
  title: string;
  description: string;
}

export const Card: React.FC<CardProps> = ({ title,url, description }) => {
  return (
    <a href={url}>
    <div  className="max-w-sm rounded overflow-hidden shadow-lg">
      <Image
        src="/CartasLocas.png"
        alt="Cartas Locas Project"
        width={350}
        height={350}
        className=""
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
    </div>
    </a>
  );
};

export default Card;
