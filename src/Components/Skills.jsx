import React from 'react';
import Logos from './Logos';

function Skills() {
  return (
    <section className='flex flex-col items-center bg-gray-950 text-white font-inter py-14 h-auto'>
      <div className='flex justify-center items-center rounded-md text-slate-200 bg-slate-600 w-24 h-8 mt-4 shadow-sm'>
        <span className='text-[14px] font-light'>Skills</span>
      </div>

      <h1 className='text-lg mt-4 font-light text-center px-4'>The skills, tools and technologies I am really good at:</h1>

      <div className='flex flex-wrap justify-center gap-32 mt-8 px-4'>
        <Logos url='https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png' name='JavaScript' />
        <Logos url='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png' name='React' />
        <Logos url='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2560px-Tailwind_CSS_Logo.svg.png' name='Tailwind' />
        <Logos url='https://cdn.worldvectorlogo.com/logos/jquery-4.svg' name='jQuery' />
        <Logos url='https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png' name='Git' />
      </div>
    </section>
  )
}

export default Skills;