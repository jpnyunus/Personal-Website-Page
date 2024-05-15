import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { FiGithub } from "react-icons/fi";

function Main() {
  return (
    <main className="main flex justify-center items-center bg-gray-950 min-h-screen w-full text-white font-inter">
      <div className="flex flex-col lg:flex-row-reverse gap-8 md:gap-16 lg:gap-32 xl:gap-64 max-w-screen-2xl items-center px-4 lg:py-8 sm:px-6 lg:px-8 mx-auto">
        <div className="flex justify-center items-center max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
          <img
            src="https://i.pinimg.com/originals/56/45/36/56453693d441a300f754c6100daf0761.jpg"
            alt="Profile of Yunus"
            className="max-w-full h-auto rounded-md shadow-xl"
          />
        </div>
        <div className="maintext max-w-lg md:max-w-xl lg:max-w-2xl text-center lg:text-left">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate-100">
            Hi, I’m Yunus 👋
          </h1>
          <h2 className="mt-4 text-base sm:text-lg md:text-xl text-slate-300">
            I'm a Front-End Developer with experience in HTML, CSS, Tailwind, JavaScript, jQuery, and React.js. I'm dedicated to crafting exceptional digital experiences that prioritize user needs, accessibility, and responsiveness. Over the past year, I've been actively involved in developing web applications, refining my skills in creating visually appealing and highly interactive user interfaces. I'm enthusiastic about exploring new front-end technologies and techniques to continually improve user experience and engagement.
          </h2>
          <div className="flex justify-center lg:justify-start items-center mt-8 gap-2 text-slate-300">
            <CiLocationOn size={24} aria-label="Location Icon" /> 
            <span>İzmir, Turkey</span>
          </div>
          <div className="flex justify-center lg:justify-start items-center my-4 mt-8 gap-4 text-slate-300">
            <a 
              href="https://github.com/jpnyunus" 
              target="_blank" 
              rel="noopener noreferrer" 
              title="GitHub Profile"
              aria-label="GitHub Profile"
            > 
              <FiGithub size={24} /> 
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Main;
