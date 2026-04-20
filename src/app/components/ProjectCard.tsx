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
    <a href={url} className="block group w-full max-w-sm">
      <div className="glass-panel rounded-lg overflow-hidden transition-all duration-500 hover:neon-glow-cyan hover:-translate-y-2 relative border-l-4 border-l-transparent hover:border-l-neon-cyan h-full flex flex-col bg-white dark:bg-tech-slate/50 shadow-lg border border-gray-200 dark:border-white/10">
        <div className="p-2 border-b border-gray-200 dark:border-white/5 bg-gray-100 dark:bg-black/40 flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
          <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
          <span className="ml-2 font-mono text-xs text-gray-500 dark:text-gray-400 truncate">~/projects/{title.toLowerCase().replace(/\s+/g, '-')}</span>
        </div>
        <div className="flex justify-center items-center overflow-hidden bg-gray-200 dark:bg-tech-slate w-full border-b border-gray-200 dark:border-white/5">
          {imageSrc ? (
            <Image
              src={imageSrc}
              alt={title}
              width={350}
              height={350}
              className="w-full h-auto object-contain opacity-90 group-hover:opacity-100 transition-opacity duration-300 dark:grayscale group-hover:grayscale-0"
            />
          ) : null}
        </div>
        <div className="p-6 flex-grow flex flex-col">
          <div className="font-mono text-xl mb-4 dark:text-neon-cyan text-gray-800 font-semibold flex items-center flex-wrap gap-2">
            <span className="text-xs font-mono font-normal text-rust-orange px-2 py-1 rounded border border-rust-orange/30 bg-rust-orange/10">GET</span>
            <span className="truncate">{title}</span>
          </div>
          <p className="text-gray-600 text-sm dark:text-gray-300 border-l-2 border-gray-300 dark:border-white/10 pl-4 py-1 italic hover:border-neon-green transition-colors flex-grow">
            {description}
          </p>
        </div>
      </div>
    </a>
  );
};
