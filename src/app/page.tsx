import Head from "next/head";
//import { useState } from "react";
import {BsFillMoonStarsFill} from 'react-icons/bs'
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillGithub,

  
} from "react-icons/ai";

export default function Home() {
  //const [darkMode, setDarkMode] = useState(false);
  return (
    <div>
      <Head>
        <title>Pablo Diaz Portofolio</title>
        <meta name="" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=" bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between  dark:text-white">
            <h1 className="text-xl font-KING668">developed by exudev</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  //onClick={() => setDarkMode(!darkMode)}
                  className=" cursor-pointer text-2xl"
                />
              </li>

              <li>
                <a
                   className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8"
                   href="#"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10" >
            <h2 className = "text-5xl py-2 text-teal-600 font-medium">Pablo Edu Diaz</h2>
            <h3 className="text-2xl py-2 dark:text-white md:text-3xl">Developer</h3>
            <p className="text-md py-5 leading-8 text-gray-800">
              {" "}
              Im Pablo Diaz, known online as Exudev. I have experience in
              software development as a full stack programmer, standing out in
              particular in the Backend area. In addition, I have skills in game
              design, which broadens my spectrum in the programming world. My
              current focus is on the use of programming languages such as C#
              and Typescript. Currently, I have a role at Novosit, where I
              contribute to the development of the Prodoctivity software. I am a
              challenge enthusiast, and my ability to learn in an agile way is
              one of my strengths.
              </p>
</div>
              <p>
              I am always willing to take on new challenges
              and learn new technologies in this constant and dynamic field. In
              addition to my career in software development, I have a variety of
              personal interests, including video games, reading comics, and
              cultivating healthy habits through the gym. Currently, my
              residence is in Santo Domingo, where I continue my quest for
              knowledge and excellence in the world of programming.
            </p>
          
          <div className="text-5xl flex justify-center gap-16 py-3 text-gra-600">
            <AiFillLinkedin />
            <AiFillTwitterCircle/>
            <AiFillGithub/>
          </div>
          <div className=""></div>
        </section>
      </main>
    </div>
  );
}
