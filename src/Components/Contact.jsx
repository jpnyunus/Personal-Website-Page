import React from 'react'
import { IoCopyOutline } from "react-icons/io5";

function Contact() {

    function copy() {
        let text = document.getElementById('mail')
        navigator.clipboard.writeText(text.textContent)
    }

  return (
    <footer id='contact' className='flex flex-col items-center text-center bg-gray-800 md:h-[35vh]'>
        <div className='flex justify-center items-center rounded-md text-slate-200 bg-slate-600 w-24 h-8 mt-8 md:mt-16 shadow-sm'>
            <span className='text-xs md:text-sm font-light'>Get in touch</span>
        </div>

        <h1 className='text-white text-lg md:text-xl font-thin w-full md:w-[30rem] mt-4 md:mt-6'>What’s next? Feel free to reach out to me if you're looking for a designer or a developer, have a query, or simply want to connect.</h1>
        <div className='flex items-end justify-center text-white mt-4 md:mt-8'>
            <span id='mail' className='text-lg md:text-4xl font-bold text-slate-200 mx-4'>yunusskrkmzz@gmail.com</span> <IoCopyOutline className='hover:cursor-pointer' size={24} onClick={copy} />
        </div>
    </footer>
  )
}

export default Contact
