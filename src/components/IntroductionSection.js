import React from 'react';

const IntroductionSection = () => {
  return (
    <div className='w-4/5 flex justify-between my-32' id='attorneys'>
      <h1 className='text-[54px] text-gray-200 w-1/2 pr-16 font-semibold'>
        Lets Introduce Ourself
      </h1>
      <div className='w-1/2 border-l px-12 py-4 border-solid'>
        <h4 className='text-3xl font-semibold pb-4 text-gray-100'>
          Criminal Lawyer
        </h4>
        <p className='text-lg text-white text-opacity-30'>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequatduis enim velit mollit Exercitation.
        </p>
      </div>
    </div>
  );
};

export default IntroductionSection;
