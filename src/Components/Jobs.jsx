import React from 'react'

function Jobs(props) {
  return (
    <div className='flex flex-col md:flex-row justify-between p-4 md:p-6 mt-6 rounded-md bg-slate-700 w-full max-w-4xl mx-auto shadow-2xl'>
      <div className='flex flex-col items-center text-center text-sm md:text-md mb-4 md:mb-0'>
        <img className='w-12 h-12 rounded-md object-cover mb-2' src={props.url} alt={props.company} />
        <span className='text-slate-300'>{props.company}</span>
      </div>
      <div className='flex flex-col items-center md:items-start'>
        <span className='font-bold text-lg md:text-xl text-slate-50'>{props.job}</span>
        <ul className='list-disc text-slate-200 text-sm md:text-base mt-2'>
          <li>i do the best i can and do small projects to improve myself</li>
          <li>i drink as much water as i can.</li>
        </ul>
      </div>
      <div className='flex flex-col items-center md:items-end'>
        <span className='text-slate-50'>{props.start} - {props.end}</span>
      </div>
    </div>
  );
}

export default Jobs;