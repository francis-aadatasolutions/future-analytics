import Link from 'next/link';
import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import { NavbarLinks } from '@/assets/NavbarLinks';
import { CgMenu } from 'react-icons/cg';
import { Logolong } from '@/assets/SVG/Longlong';

export const sidebarVariant = {
  hidden: {
    x: 100,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.3,
    },
  },
  exit: {
    x: 100,
    opacity: 0,
    transition: {
      duration: 0.3,
    },
  },
};

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className='md:hidden'>
        <button onClick={() => setIsOpen(true)}>
          <CgMenu className='text-3xl md:hidden' />
        </button>

        <AnimatePresence>
          {isOpen ? (
            <>
              <div
                onClick={() => setIsOpen(false)}
                className='fixed bg-slate-700 opacity-40 top-0 right-0 z-20 w-[50rem] h-full'></div>
              <motion.div
                variants={sidebarVariant}
                initial='hidden'
                animate='visible'
                exit='exit'
                className='p-4 bg-white fixed top-0 right-0 h-full w-[50%] z-40'>
                <div className='flex justify-start mb-12'>
                  <Logolong />
                </div>
                <div
                  className='flex flex-col text-slate-500 gap-8'
                  onClick={() => setIsOpen(false)}>
                  {NavbarLinks.map((links) => {
                    const { id, name, link, icon, textSize } = links;
                    return (
                      <Link
                        href={link}
                        className='hover:text-white hover:bg-[#12B7FE] hover:p-2 hover:rounded-md'
                        key={id}>
                        <div className='flex space-x-2 items-center'>
                          <div className={`${textSize}`}>{icon}</div>
                          <p>{name}</p>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </motion.div>
            </>
          ) : null}
        </AnimatePresence>
      </div>
      <div className='hidden md:block'>
        <div className='flex gap-16'>
          {NavbarLinks.map((links) => {
            const { id, name, link, icon, textSize } = links;
            return (
              <Link href={link} key={id} className='hover:text-[#4ec1fa]'>
                <p className='text-xl'>{name}</p>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Navbar;
