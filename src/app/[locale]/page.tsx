"use client";

import Image from "next/image";
import {useState, useEffect} from "react";
import {useTranslations} from 'next-intl';
import {BsFillMoonStarsFill} from "react-icons/bs";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillGithub,
} from "react-icons/ai";
import {Card} from "../components/ProjectCard";
import LanguageSwitcher from "../components/LanguageSwitcher";

export default function Home() {
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('darkMode') === 'true';
    }
    return false;
  });
  const t = useTranslations();

  useEffect(() => {
    localStorage.setItem('darkMode', String(darkMode));
  }, [darkMode]);

  return (
    <div className={darkMode ? "dark" : ""}>
      <main className=" bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40">
        <section id="main" className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between dark:text-white">
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className=" cursor-pointer text-2xl text-gray-600 dark:text-yellow-400"
                />
              </li>
              <li>
                <LanguageSwitcher />
              </li>
              <li>
                <a
                  className="bg-gradient-to-r from-purple-900 to-violet-500 text-white px-4 py-2 border-none rounded-md ml-8"
                  href="/exudev-vitae.pdf"
                  download="exudev-vitae"
                >
                  {t('Nav.resume')}
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-3">
            <div className="flex justify-center items-center">
              <div className="rounded-full overflow-hidden">
                <Image
                  src="/pp.jpeg"
                  alt="Profile Picture"
                  width={225}
                  height={225}
                />
              </div>
            </div>
            <h2 className="text-5xl py-2 text-purple-900 dark:text-purple-300 font-medium">
              {t('Hero.name')}
            </h2>
            <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
              {t('Hero.title')}
            </h3>
            <p className="text-md py-2 leading-8 text-black dark:text-white">
              {t('Hero.bio1')}
            </p>
            <p className="text-md py-2 leading-8 text-black dark:text-white">
              {t('Hero.bio2')}
            </p>
          </div>
          <div className="text-5xl flex justify-center gap-16 py-2 text-gray-600 dark:text-gray-300">
            <a href="https://www.linkedin.com/in/pablo-eduardo-diaz-hernandez-a1b457183/">
              <AiFillLinkedin className="icon text-gray-600 dark:text-gray-300 hover:text-purple-950 dark:hover:text-purple-300" />
            </a>
            <a href="https://twitter.com/pabloedudh">
              <AiFillTwitterCircle className="icon text-gray-600 dark:text-gray-300 hover:text-purple-950 dark:hover:text-purple-300" />
            </a>
            <a href="https://github.com/Exudev">
              <AiFillGithub className="icon text-gray-600 dark:text-gray-300 hover:text-purple-700 dark:hover:text-purple-300" />
            </a>
          </div>
        </section>
        <section id="projects">
          <div className="text-center p-3">
            <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
              {t('Projects.heading')}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
              <Card
                description={t('Projects.cartasLocas')}
                url="https://cartas-locas.vercel.app/"
                imageSrc="/CartasLocas.png"
                title="Cartas Locas"
              />
              <Card
                description={t('Projects.parkingSpot')}
                url="https://docs.google.com/presentation/d/1HGjAPsa_dOM-v44U5EoJvkkBFajFDEaoez8PadRBkX0/edit?usp=sharing"
                imageSrc="/PS.png"
                title="Parking Spot"
              />
              <Card
                description="*******"
                url="https://cartaslocasrd.000webhostapp.com"
                imageSrc="/CartasLocas.png"
                title="***"
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
