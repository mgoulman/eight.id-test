import React from 'react';
import image from '../assets/person.png';
import shape from '../assets/shape1.svg';
import { MdMail } from 'react-icons/md';

function Head() {
  return (
    <div
      className='grid grid-cols-1  lg:grid-cols-2 mt-20 w-4/5 '
      id='home'
    >
      <div className='flex flex-col text-gray-100'>
        <h1 className='text-6xl font-semibold'>You don’t have to</h1>
        <h1 className='text-6xl mt-4 font-medium'>Fight them Alone.</h1>
        <p className='text-lg my-14 text-white text-opacity-30'>
          Lorem ipsum dolor sit amet consectetur adipiscing elit blandit,
          curabitur sodales conubia ut inceptos faucibus himenaeos tortor eget,
          hac massa gravida arcu interdum proin curae.
        </p>

        <div className='flex bg-white bg-opacity-10 w-full w-full lg:w-3/4 pl-4 items-center rounded-full'>
          <MdMail className='w-6 h-6 mr-4 text-white text-opacity-30' />
          <input
            placeholder='Enter your email address'
            className='flex-grow  text-base bg-transparent'
            type='text'
          />
          <button className='bg-yellow-500 mr-1 my-1 py-4 px-8 rounded-full'>
            Let's talk
          </button>
        </div>
      </div>
      <div
        className={`relative w-full flex justify-center lg:justify-end mt-24 right-0 `}
        style={{ height: '444px' }}
      >
        <img
          className=' bg-yellow-500 rounded-[55px]  w-[444px]'
          src={shape}
          alt='shape'
        />
        <img src={image} className='absolute w-[444px] bottom-0' alt='person' />
      </div>
    </div>
  );
}

export default Head;
