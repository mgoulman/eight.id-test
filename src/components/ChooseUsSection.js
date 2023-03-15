import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ChooseUsSection = () => {
  const [boxes, setBoxes] = useState([])
  useEffect(() => {
    axios
      .get('/ChooseUs.json')
      .then((response) => {
        console.log(response.data);
        setBoxes(response.data);
      })
      .catch((error) => {
        console.error(error);
      });

  }, [])
  

  return (
    <div className='w-4/5'>
      <h1 className='text-gray-100 text-6xl w-full text-center mb-24' id='about'>
        Why Choose Us?
      </h1>
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 mb-44'>
        {boxes.map((box) => (
          <div
            key={box.id}
            className='border border-white border-opacity-10 even:bg-gray-100 even:bg-opacity-10 rounded-xl p-8'
          >
            <img
              src={box.image}
              className='w-20 h-20 rounded-full'
              alt={box.title}
            />
            <h2 className='my-7 text-2xl font-semibold text-gray-100'>
              {box.title}
            </h2>
            <p className='mb-7 text-sm text-gray-100 text-opacity-30'>
              {box.description}
            </p>
            <button className='bg-yellow-600 py-2.5 px-6 font-semibold text-sm rounded-3xl'>
              Read More
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChooseUsSection;
