import React, { useState } from 'react';
import { Link } from 'react-scroll';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className=" bg-slate-950">
      <div className='flex items-center justify-between bg-slate-950 text-white font-inter shadow-md h-16 px-4 sm:px-6 md:px-8 mx-auto max-w-screen-2xl'>
        <div className='logo font-bold text-xl'>
          <span>Yunux</span>
        </div>
        <button className='burger sm:hidden p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-300' onClick={() => setIsOpen(!isOpen)}>
          <svg className={isOpen ? 'hidden' : 'block'} width="24" height="24" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2.5 7.5H17.5V9.5H2.5V7.5ZM2.5 10.5H17.5V12.5H2.5V10.5ZM2.5 13.5H17.5V15.5H2.5V13.5Z" fill="currentColor"/>
          </svg>
          <svg className={isOpen ? 'block' : 'hidden'} width="24" height="24" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.4142 10L16.7071 4.70711L15.2929 3.29289L10 8.58579L4.70711 3.29289L3.29289 4.70711L8.58579 10L3.29289 15.2929L4.70711 16.7071L10 11.4142L15.2929 16.7071L16.7071 15.2929L11.4142 10Z" fill="currentColor"/>
          </svg>
        </button>
        <div className={`navtext flex-col sm:flex-row sm:items-center sm:static absolute top-16 left-0 w-full sm:w-auto sm:flex bg-slate-950 sm:bg-transparent p-4 sm:p-0 transition-all ease-in-out duration-300 ${isOpen ? 'flex' : 'hidden'}`}>
          <Link to="about" spy={true} smooth={true} offset={50} duration={600} className='block px-4 py-2 rounded-md text-sm sm:text-base hover:cursor-pointer hover:bg-slate-800 sm:hover:bg-transparent sm:hover:text-gray-300 transition-colors'>About</Link>
          <Link to="contact" spy={true} smooth={true} offset={50} duration={700} className='block px-4 py-2 rounded-md text-sm sm:text-base hover:cursor-pointer hover:bg-slate-800 sm:hover:bg-transparent sm:hover:text-gray-300 transition-colors'>Contact</Link>
          
          <button className='bg-white text-black mt-2 sm:mt-0 sm:ml-4 rounded-lg px-6 py-2 text-sm sm:text-base font-medium transition-colors hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-300'>
            <a href="#download" download>Download CV</a>
          </button>
        </div>
        </div>
      </nav>
  );
}

export default Navbar;