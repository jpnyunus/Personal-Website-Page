import React from 'react';
import { FaExternalLinkAlt } from "react-icons/fa";

function ProjectCard({ imageUrl, title, description, features, link }) {
  return (
    <div className='flex flex-col md:flex-row bg-slate-700 rounded-lg overflow-hidden shadow-xl max-w-4xl w-full p-2'>
      <div className='md:w-1/2'>
        <img className='w-full h-full object-cover rounded-sm' src={imageUrl} alt={title} />
      </div>
      <div className='flex flex-col gap-2 p-4 md:w-1/2'>
        <h2 className='text-xl font-semibold'>{title}</h2>
        <p className='text-md mt-2'>{description}</p>
        <ul className='list-disc pl-4 mt-2 text-slate-300'>
          {features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
        <div className='mt-2 p-[2px]'>
          <a href={link} className='text-blue-400 hover:text-blue-300 transition duration-300 mt-2'><FaExternalLinkAlt /></a>  
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;