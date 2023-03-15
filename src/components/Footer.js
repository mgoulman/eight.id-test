import React from 'react';
import logo from '../assets/logo.png';
import { BsInstagram, BsPinterest } from 'react-icons/bs';
import { AiFillFacebook } from 'react-icons/ai';
import { FaTwitterSquare } from 'react-icons/fa';

function Footer() {
  return (
    <div className='flex flex-col justify-center items-center w-full mt-32 bg-darkGray'>
      <div className='w-full flex flex-col md:flex-row justify-between items-center p-16'>
        <div className='bg-transparent'>
          <img src={logo} alt='Eight-id' className='w-20 h-5' />
        </div>
        <div className='flex justify-between w-full lg:w-2/5 items-center my-4'>
          <p className='text-blue-50  text-sm '>
            <a href='#home'>Home</a>
          </p>
          <p className='text-blue-50  text-sm '>
            <a href='#attorneys'>Attorneys</a>
          </p>
          <p className='text-blue-50  text-sm '>
            <a href='#practice'>Practice Areas</a>
          </p>
          <p className='text-blue-50  text-sm '>
            <a href='#about'>About Us</a>
          </p>
        </div>
        <div className='flex justify-around items-center text-yellow-500'>
          <div className='p-2'>
            <BsInstagram />
          </div>
          <div className='p-2'>
            <AiFillFacebook />
          </div>
          <div className='p-2'>
            <FaTwitterSquare />
          </div>
          <div className='p-2'>
            <BsPinterest />
          </div>
        </div>
      </div>
      <div className='flex flex-col md:flex-row justify-between items-center'>
        <h6 className='text-blue-50 px-4 pb-10 text-[10px] md:px-8'>
          © 2020 Acme. All right reserved.
        </h6>
        <h6 className='text-blue-50 px-4 pb-10 text-xs md:px-8'>
          Privacy Policy
        </h6>
        <h6 className='text-blue-50 px-4 pb-10 text-[10px] md:px-8'>
          Terms of Service
        </h6>
      </div>
    </div>
  );
}

export default Footer;
