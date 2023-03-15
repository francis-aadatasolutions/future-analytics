import Logo from '@/assets/SVG/Logo';
import React, { useState } from 'react';
import logo from '../../assets/logo.svg';
import { CgMenu } from 'react-icons/cg';
import Navbar from '../navbar';
import Link from 'next/link';
import Logolong, { LogolongWeb } from '@/assets/SVG/Longlong';
import { AnimatePresence, motion } from 'framer-motion';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoMdClose } from 'react-icons/io';
import { NavbarLinks } from '@/assets/NavbarLinks';

const Headers = ({ isOpen, setIsOpen }) => {
  return (
    <div className='h-16 md:h-20'>
      <div className=' text-white py-6  md:py-8 w-full shadow-sm'>
        <div className='flex justify-between items-center section-center'>
          <Link href='/'>
            <LogolongWeb />
          </Link>
          <div className='md:hidden'>
            {isOpen ? (
              <IoMdClose
                className='text-white text-[32px] cursor-pointer'
                onClick={() => setIsOpen(false)}
              />
            ) : (
              <CgMenu
                className='md:hidden text-clr text-[32px] cursor-pointer'
                onClick={() => setIsOpen(true)}
              />
            )}
          </div>
          <Navbar />
          {/* <div className='hidden md:block'></div> */}
        </div>
      </div>
    </div>
  );
};

export default Headers;
