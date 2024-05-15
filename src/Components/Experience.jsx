import React from 'react'
import Jobs from './Jobs'

function Experience() {
  return (
    <section className='flex flex-col items-center bg-gray-800 text-white font-inter py-14'>
      <div className='flex justify-center items-center rounded-md text-slate-200 bg-slate-600 w-24 h-8 shadow-sm'>
        <span className='text-[14px] font-light'>Experience</span>
      </div>
      <h1 className='text-lg font-light mt-4 mb-2 text-center px-6'>Here is a quick summary of my most recent experiences:</h1>

      <div className='w-full px-4 md:px-8'>
        <Jobs
          url='https://static.vecteezy.com/system/resources/thumbnails/009/726/216/small/pixel-art-planet-earth-for-8bit-game-on-white-background-vector.jpg'
          company='Earth'
          job='Front-End Developer'
          start='2023'
          end='Present'
        />
      </div>
    </section>
  )
}

export default Experience