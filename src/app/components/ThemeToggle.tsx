"use client";

import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";

export default function ThemeToggle() {
  const toggleTheme = () => {
    const isDark = document.documentElement.classList.toggle('dark');
    localStorage.setItem('darkMode', String(isDark));
  };

  return (
    <div 
      onClick={toggleTheme} 
      className="cursor-pointer p-2 rounded-md glass-panel hover:border-neon-cyan transition-all text-xl text-gray-600 dark:text-yellow-400"
      aria-label="Toggle Dark Mode"
    >
      <div className="moon-icon">
        <BsFillMoonStarsFill />
      </div>
      <div className="sun-icon">
        <BsFillSunFill />
      </div>
    </div>
  );
}
