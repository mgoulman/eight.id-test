import React, { useState } from 'react';
import logo from '../assets/logo.png';
import { RiCloseLine } from 'react-icons/ri';
import { RiMenu3Line } from 'react-icons/ri';

function Navbar() {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <div className='flex justify-center lg:justify-between lg:w-4/5 w-full  items-center'>
        <div className='lg:hidden absolute left-5 flex flex-col text-start'>
          {!toggle && (
            <RiMenu3Line
              color='#fff'
              size={27}
              onClick={() => setToggle(true)}
            />
          )}
        </div>
        <div className='bg-transparent'>
          <img src={logo} alt='Eight-id' className='w-44 h-10' />
        </div>
        <div className='hidden lg:flex flex-grow lg:justify-center '>
          <p className='text-blue-50 mr-10'>
            <a href='#home'>Home</a>
          </p>
          <p className='text-blue-50 mr-10'>
            <a href='#attorneys'>Attorneys</a>
          </p>
          <p className='text-blue-50 mr-10'>
            <a href='#practice'>Practice Areas</a>
          </p>
          <p className='text-blue-50 mr-10'>
            <a href='#about'>About Us</a>
          </p>
        </div>
        <div className='hidden lg:flex  justify-end  text-blue-50 text-base'>
          <button
            className='border-2 border-solid  h-12 py-3 w-44 border-gray-100 '
            type='button'
          >
            Contact Now
          </button>
        </div>
        <div className='lg:hidden flex flex-col text-start'>
          {toggle && (
            <div className='fixed left-0 top-0 flex flex-col text-start sm:p-4 lg:p-16  h-screen min-w-201 rounded-r-2xl shadow-sm border-1 border-white border-opacity-30 border-l-0 bg-lightGray z-50 border-solid'>
              <div className='flex justify-end items-center'>
                <RiCloseLine
                  color='#fff'
                  size={27}
                  onClick={() => setToggle(false)}
                />
              </div>
              <h3 className='text-3xl text-center text-white text-opacity-70'>
                Menu
              </h3>
              <div className='flex flex-col text-2xl text-white mt-8 text-opacity-70'>
                <p className='mx-4 p-4 rounded-xl hover:bg-darkGray'>
                  <a href='#home'>Home</a>
                </p>
                <p className='mx-4 p-4 rounded-xl hover:bg-darkGray'>
                  <a href='#attorneys'>Attorneys</a>
                </p>
                <p className='mx-4 p-4 rounded-xl hover:bg-darkGray'>
                  <a href='#practice'>Practice Areas</a>
                </p>
                <p className='mx-4 p-4 rounded-xl hover:bg-darkGray'>
                  <a href='#about'>About Us</a>
                </p>
              </div>
              <div className='flex-grow flex justify-center w-full items-end text-blue-50 text-base'>
                <button
                  className='border-2 border-solid  h-12 py-3 w-full border-gray-100 '
                  type='button'
                >
                  Contact Now
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Navbar;
