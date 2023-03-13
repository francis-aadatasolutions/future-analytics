import Logo from '@/assets/SVG/Logo';
import React from 'react';
import logo from '../../assets/logo.svg';
import { CgMenu } from 'react-icons/cg';
import Navbar from '../navbar';
import Link from 'next/link';
import Logolong, { LogolongWeb } from '@/assets/SVG/Longlong';

const Headers = () => {
  return (
    <div className='h-16 md:h-20'>
      <div className=' text-white py-6  md:py-8 w-full shadow-sm md:static md:shadow-none'>
        <div className='flex justify-between items-center section-center'>
          <Link href='/'>
            <LogolongWeb />
          </Link>
          <Navbar />
          {/* <div className='hidden md:block'></div> */}
        </div>
      </div>
    </div>
  );
};

export default Headers;
