import React from 'react';
import ProjectCard from './ProjectCard';

function Projects() {
  return (
    <section className='flex flex-col items-center bg-gray-950 text-white font-inter py-10'>
      <div className='flex justify-center items-center rounded-md text-slate-200 bg-slate-600 w-24 h-8 mt-4 shadow-sm'>
        <span className='text-[14px] font-light'>Projects</span>
      </div>

      <h1 className='text-lg mt-4 font-light text-center'>Here are some of my recent projects:</h1>

      <div className='flex flex-col justify-center items-center gap-10 mt-6 px-4 w-full'>
        <ProjectCard 
          imageUrl="https://i.imgur.com/fiKuvXDl.png"
          title="init1 - A Text Based Interactive Game"
          description="INIT1 is a text-based adventure game that follows the story of a computer hacker. Anonymity is his shield against the world, but when he receives a mysterious message from his friend Avunit, he's drawn into a series of events. The story begins with the discovery that only 1% of the images from the James Webb Space Telescope are shared with the public."
          features={[
            "JavaScript Powering the core functionality and interactivity of the game.",
            "Your decisions shape the path of the game, leading to different endings based on your actions.",
            "Responsive Design"
          ]}
          link="https://github.com/jpnyunus/init1-Text-Based-Interactive-Game"
        />

        <ProjectCard 
          imageUrl="https://i.imgur.com/Vus8RCJ.png"
          title="Personal Website Design"
          description="This project was created using React and Tailwind. It was built without any external library."
          features={[
            "Using some Libraries",
            "Dropdown Menus and Tooltips",
            "Responsive Design using Flexbox and Grid"
          ]}
          link="https://github.com"
        />
      </div>
    </section>
  );
}

export default Projects;