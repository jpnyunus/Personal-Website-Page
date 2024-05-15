import React from 'react';

function Logos(props) {
  return (
    <div className='flex flex-col justify-center items-center text-center font-inter text-sm mt-4'>
      <div className='flex justify-center items-center w-12 h-12 md:w-16 md:h-16'>
        <img className='w-full h-full object-contain' src={props.url} alt={props.name} />
      </div>
      <span className='text-slate-300 mt-2'>{props.name}</span>
    </div>
  );
}

export default Logos;