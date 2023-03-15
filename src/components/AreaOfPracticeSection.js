import React from 'react';
import BusinessLawPic from '../assets/BusinessLaw.jpeg';
import PartnerShipLaw from '../assets/PartnerShipLaw.jpeg';

const AreaOfPracticeSection = () => {
  return (
    <div className='w-4/5 '>
      <h1 className='text-gray-100 text-6xl w-full text-center mb-24' id='practice'>
        Area of Practices
      </h1>
      <div className='grid grid-cols-2 lg:grid-cols-3 gap-8 '>
        <div
          style={{
            backgroundImage: `url(${BusinessLawPic})`,
          }}
          className='col-span-2 h-80 rounded-2xl flex items-end justify-center bg-cover'
        >
          <h2 className='text-3xl font-semibold text-white text-center p-12'>
            Business Law
          </h2>
        </div>
        <div
          style={{
            backgroundImage: `url(${PartnerShipLaw})`,
          }}
          className=' h-80 rounded-2xl flex items-end justify-center bg-cover'
        >
          <h2 className='text-3xl font-semibold text-white text-center p-12'>
            Partnership Law
          </h2>
        </div>
        <div
          style={{
            backgroundImage: `url(${PartnerShipLaw})`,
          }}
          className=' h-80 rounded-2xl flex items-end justify-center bg-cover'
        >
          <h2 className='text-3xl font-semibold text-white text-center p-12'>
            Business Law
          </h2>
        </div>
        <div
          style={{
            backgroundImage: `url(${PartnerShipLaw})`,
          }}
          className='col-span-2 h-80 rounded-2xl flex items-end justify-center bg-cover'
        >
          <h2 className='text-3xl font-semibold text-white text-center p-12'>
            Business Law
          </h2>
        </div>
        <div
          style={{
            backgroundImage: `url(${PartnerShipLaw})`,
          }}
          className='col-span-2 h-80 rounded-2xl flex items-end justify-center bg-cover'
        >
          <h2 className='text-3xl font-semibold text-white text-center p-12'>
            Business Law
          </h2>
        </div>
        <div
          style={{
            backgroundImage: `url(${PartnerShipLaw})`,
          }}
           className=' h-80 rounded-2xl flex items-end justify-center bg-cover'
        >
          <h2 className='text-3xl font-semibold text-white text-center p-12'>
            Business Law
          </h2>
        </div>
      </div>
    </div>
  );
};

export default AreaOfPracticeSection;
