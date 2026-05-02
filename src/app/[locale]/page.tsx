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
  const [showMore, setShowMore] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  const [mounted, setMounted] = useState(false);
  const t = useTranslations();

  useEffect(() => {
    setMounted(true);
    const stored = localStorage.getItem('darkMode');
    const isDark = stored !== 'false'; // Defaults to true
    setDarkMode(isDark);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    localStorage.setItem('darkMode', String(darkMode));
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode, mounted]);

  return (
    <div className={darkMode ? "dark" : ""}>
      <main className="bg-gray-50 dark:bg-tech-black px-6 md:px-20 lg:px-40 transition-colors duration-500 min-h-screen relative overflow-hidden font-sans">
        {/* Subtle grid background for tech feel */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L3N2Zz4=')] dark:opacity-100 opacity-0 pointer-events-none"></div>
        
        <section id="main" className="min-h-screen relative z-10 flex flex-col">
          <nav className="py-8 mb-12 flex justify-between items-center text-gray-800 dark:text-white">
            <div className="font-mono text-xl font-bold tracking-tighter">
              <span className="text-neon-cyan">{"//"}</span> exudev<span className="text-neon-green animate-pulse">_</span>
            </div>
            <ul className="flex items-center gap-3 sm:gap-6">
              <li>
                <div onClick={() => setDarkMode(!darkMode)} className="cursor-pointer p-2 rounded-md glass-panel hover:border-neon-cyan transition-all text-xl text-gray-600 dark:text-yellow-400">
                  <BsFillMoonStarsFill />
                </div>
              </li>
              <li>
                <LanguageSwitcher />
              </li>
              <li>
                <a
                  className="font-mono text-sm bg-white dark:bg-tech-slate/50 border border-gray-300 dark:border-neon-cyan text-gray-800 dark:text-neon-cyan px-4 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-neon-cyan/10 hover:shadow-[0_0_15px_rgba(6,182,212,0.3)] transition-all flex items-center gap-2 font-bold"
                  href="/exudev-vitae.pdf"
                  download="exudev-vitae"
                >
                  <span className="text-rust-orange">↓</span> {t('Nav.resume')}
                </a>
              </li>
            </ul>
          </nav>
          <div className="flex-grow flex flex-col justify-center pb-20">
            <div className="text-center p-3 relative max-w-3xl mx-auto w-full">
              {/* Glow effects */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-neon-cyan/10 blur-[120px] rounded-full -z-10 dark:block hidden pointer-events-none"></div>
              <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[300px] h-[300px] bg-neon-green/5 blur-[100px] rounded-full -z-10 dark:block hidden pointer-events-none"></div>
              
              <div className="flex justify-center items-center mb-10 relative">
                <div className="relative group w-[200px] h-[200px] [perspective:1000px]">
                  <div className="absolute -inset-1 bg-gradient-to-r from-neon-cyan to-neon-green rounded-full blur opacity-50 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                  
                  <div className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                    {/* Front Face: pablo.jpg */}
                    <div className="absolute inset-0 [backface-visibility:hidden] rounded-full overflow-hidden ring-2 ring-gray-200 dark:ring-neon-cyan/50 p-1 bg-white dark:bg-tech-slate">
                      <Image
                        src="/pablo.jpg"
                        alt="Profile Picture Front"
                        width={200}
                        height={200}
                        className="rounded-full dark:grayscale hover:grayscale-0 transition-all duration-500 object-cover w-full h-full"
                      />
                    </div>

                    {/* Back Face: pp.jpeg */}
                    <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] rounded-full overflow-hidden ring-2 ring-gray-200 dark:ring-neon-cyan/50 p-1 bg-white dark:bg-tech-slate">
                      <Image
                        src="/pp.jpeg"
                        alt="Profile Picture Back"
                        width={200}
                        height={200}
                        className="rounded-full dark:grayscale hover:grayscale-0 transition-all duration-500 object-cover w-full h-full"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Terminal Code Block UI */}
              <div className="glass-panel text-left p-6 rounded-lg mb-8 font-mono shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-neon-cyan to-neon-green"></div>
                <div className="flex items-center gap-2 mb-4 border-b border-gray-200 dark:border-white/10 pb-3">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  </div>
                  <span className="text-xs text-gray-500 dark:text-gray-400 ml-2">bash - exudev@server:~</span>
                </div>
                <div>
                  <p className="text-gray-800 dark:text-gray-300">
                    <span className="text-neon-cyan font-bold">{">"}</span> <span className="text-rust-orange">curl</span> <span className="text-green-600 dark:text-neon-green">https://api.exudev.com/profile</span>
                  </p>
                  <div className="mt-3 text-sm text-gray-700 dark:text-gray-400 pl-4 border-l-2 border-gray-300 dark:border-white/10 py-1">
                    <p className="text-purple-600 dark:text-purple-400">{"{"}</p>
                    <p className="pl-4">
                      <span className="text-blue-600 dark:text-neon-cyan">&quot;name&quot;</span>: <span className="text-green-600 dark:text-neon-green">&quot;{t('Hero.name')}&quot;</span>,
                    </p>
                    <p className="pl-4">
                      <span className="text-blue-600 dark:text-neon-cyan">&quot;role&quot;</span>: <span className="text-green-600 dark:text-neon-green">&quot;{t('Hero.title')}&quot;</span>,
                    </p>
                    <p className="pl-4">
                      <span className="text-blue-600 dark:text-neon-cyan">&quot;status&quot;</span>: <span className="text-green-600 dark:text-neon-green">&quot;200 OK | Online&quot;</span>,
                    </p>
                    <p className="pl-4">
                      <span className="text-blue-600 dark:text-neon-cyan">&quot;bio&quot;</span>: <span className="text-green-600 dark:text-neon-green">&quot;{t('Hero.bio1')} {t('Hero.bio2')}&quot;</span>
                    </p>
                    <p className="text-purple-600 dark:text-purple-400">{"}"}</p>
                  </div>
                </div>
              </div>
            </div>
          <div className="text-3xl flex justify-center gap-12 py-6 mt-8 border-y border-gray-200 dark:border-white/5 bg-gray-100/50 dark:bg-black/20 font-mono">
            <a href="https://www.linkedin.com/in/pablo-eduardo-diaz-hernandez-a1b457183/" className="group relative flex items-center gap-2">
              <div className="absolute inset-0 bg-neon-cyan blur-md opacity-0 group-hover:opacity-40 transition-opacity"></div>
              <AiFillLinkedin className="relative z-10 text-gray-400 hover:text-neon-cyan transition-colors" />
              <span className="text-sm text-gray-500 group-hover:text-neon-cyan transition-colors hidden sm:inline">LinkedIn</span>
            </a>
            <a href="https://twitter.com/pabloedudh" className="group relative flex items-center gap-2">
              <div className="absolute inset-0 bg-neon-cyan blur-md opacity-0 group-hover:opacity-40 transition-opacity"></div>
              <AiFillTwitterCircle className="relative z-10 text-gray-400 hover:text-neon-cyan transition-colors" />
              <span className="text-sm text-gray-500 group-hover:text-neon-cyan transition-colors hidden sm:inline">Twitter</span>
            </a>
            <a href="https://github.com/Exudev" className="group relative flex items-center gap-2">
              <div className="absolute inset-0 bg-white blur-md opacity-0 group-hover:opacity-40 transition-opacity"></div>
              <AiFillGithub className="relative z-10 text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors" />
              <span className="text-sm text-gray-500 group-hover:text-gray-900 dark:group-hover:text-white transition-colors hidden sm:inline">GitHub</span>
            </a>
          </div>
          </div>
        </section>

        <section id="projects" className="pb-20 relative z-10">
          <div className="w-full max-w-6xl mx-auto p-3">
            <div className="mb-10 flex flex-col sm:flex-row sm:items-center gap-4 border-b border-gray-300 dark:border-white/10 pb-4">
              <h3 className="text-2xl font-mono font-bold text-gray-800 dark:text-white flex items-center gap-2 whitespace-nowrap">
                <span className="text-neon-cyan">#</span> {t('Projects.heading')}
              </h3>
              <div className="h-px bg-gradient-to-r from-gray-300 dark:from-neon-green/50 to-transparent flex-grow hidden sm:block"></div>
              <div className="text-xs font-mono text-gray-500 flex items-center gap-2 bg-gray-100 dark:bg-tech-slate px-3 py-1.5 rounded-full border border-gray-200 dark:border-white/5">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neon-green opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-neon-green"></span>
                </span>
                Data Nodes: <span className="text-gray-800 dark:text-white font-bold">{showMore ? '5' : '3'} active</span>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
              <Card
                description={t('Projects.portalDigitalTv')}
                url="https://portaldigitaltv.com/"
                imageSrc="/PD.jpeg"
                title="Portal Digital TV"
              />
              <Card
                description={t('Projects.parkingSpot')}
                url="https://docs.google.com/presentation/d/1HGjAPsa_dOM-v44U5EoJvkkBFajFDEaoez8PadRBkX0/edit?usp=sharing"
                imageSrc="/PS.png"
                title="Parking Spot"
              />
              <Card
                description={t('Projects.sinisterSix')}
                url="https://sinister-six.com/"
                imageSrc="/sinister-six.png"
                title="Sinister Six"
              />
            </div>
            <div className="flex justify-center mt-12 mb-8">
              <button
                onClick={() => setShowMore(!showMore)}
                className="px-6 py-2 bg-transparent border border-gray-400 dark:border-white/20 rounded-md font-mono text-sm text-gray-600 dark:text-gray-300 hover:text-neon-cyan hover:border-neon-cyan hover:shadow-[0_0_15px_rgba(6,182,212,0.2)] transition-all flex items-center gap-2"
              >
                <span className="text-rust-orange">{showMore ? '-' : '+'}</span>
                {showMore ? t('Projects.seeLess') : t('Projects.seeMore')}
              </button>
            </div>
            {showMore && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center mt-8">
                <Card
                  description={t('Projects.cartasLocas')}
                  url="https://cartas-locas.vercel.app/"
                  imageSrc="/CartasLocas.png"
                  title="Cartas Locas"
                />
                <Card
                  description={t('Projects.emitochondria')}
                  url="https://www.npmjs.com/package/emitochondria"
                  imageSrc="/Npm.png"
                  title="Emitochondria"
                />
              </div>
            )}
          </div>
        </section>
      </main>
    </div>
  );
}
