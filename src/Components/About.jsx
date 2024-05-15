import React from 'react';

function About() {
  return (
    <section id='about' className='flex flex-col items-center justify-center gap-8 bg-gray-800 w-full font-inter py-8 md:py-16'>
      {/* Section Title */}
      <div className='flex justify-center items-center rounded-md text-slate-200 bg-slate-600 w-24 h-8 shadow-sm'>
        <span className='text-[14px] font-light'>About</span>
      </div>
      
      {/* Main Content */}
      <div className='flex flex-col md:flex-row justify-between items-center max-w-screen-2xl w-full px-4 md:px-8 lg:px-12 mx-auto gap-8 md:gap-4'>
        {/* Profile Image */}
        <div className='flex justify-center md:w-1/2 xl:w-1/3'>
          <img
            className='max-w-full w-96 h-auto rounded-lg shadow-lg'
            src="https://e1.pxfuel.com/desktop-wallpaper/772/560/desktop-wallpaper-toji-fushiguro.jpg"
            alt="Profile Picture"
          />
        </div>

        {/* About Text */}
        <div className='flex flex-col gap-4 text-white w-full md:w-1/2 xl:w-2/5 text-sm sm:text-base lg:text-lg'>
          <h1 className='text-xl font-bold sm:text-2xl lg:text-3xl'>Curious about me? Here you have it:</h1>
          <p className='font-light'>
            I'm an enthusiastic Front-End Development student with a keen interest in UI/UX Design
            and a love for all things technology. My journey in the tech world is driven by a passion
            for creating intuitive and effective user interfaces, using a blend of modern JavaScript, Tailwind, and React.js.
          </p>
          <p className='font-light'>
            As a student deeply immersed in the world of coding, I've dedicated myself to mastering the
            art of bringing designs to life. While I primarily focus on Front-End technologies, my curiosity
            doesn't stop there—I'm constantly exploring how user experience and design principles can be integrated
            to enhance web applications.
          </p>
          <p className='font-light'>
            I am trying to learn and evolve every day by taking up new challenges and learning new things
            on a day-to-day basis. I love learning about user psychology and making a valuable user experience
            for all types of users.
          </p>

          {/* Skills and Interests */}
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 p-4 font-light text-xs sm:text-sm md:text-base'>
            <ul className='list-disc'>
              <li>Computer Programming</li>
              <li>Tech Geek</li>
            </ul>
            <ul className='list-disc'>
              <li>Freelancer</li>
              <li>AI Hater (jk)</li>
            </ul>
          </div>
          <p className='font-light'>
            Feel free to reach out if you want to talk about technology, share ideas, or discuss potential projects! I am here
            to learn and contribute to the tech community in any way I can
          </p>
        </div>
      </div>
    </section>
  )
}

export default About;