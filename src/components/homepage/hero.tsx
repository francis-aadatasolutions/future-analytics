import React, { useState } from 'react';

import heroimage from '../../assets/images/hero/homepage/hero.png';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { TypeAnimation } from 'react-type-animation';
import { IoMdArrowForward } from 'react-icons/io';
import { AnimatePresence, motion } from 'framer-motion';

const Hero = () => {
  const router = useRouter();
  const [hover, setHover] = useState<boolean>(false);

  const onHover = () => {
    setHover(true);
  };

  const onMouseLeave = () => {
    setHover(false);
  };

  return (
    <>
      <div className=' section-center grid grid-cols-1 md:grid-cols-[1.2fr_1fr] items-center text-white py-24 pb-32'>
        <div className='max-w-full'>
          <TypeAnimation
            className='font-semibold text-center md:text-left text-3xl md:text-[2.50rem] md:leading-normal md:pl-16  '
            sequence={[
              ' Pioneering Business Intelligence and Data Visualization Solutions for a Data-Driven Future',
            ]}
            speed={80}
            cursor={false}
            wrapper='h4'
            repeat={0}
          />

          <div className='flex justify-center md:justify-start space-x-4 mt-10 md:mt-20'>
            <button
              onClick={() => router.push('/services')}
              className='flex items-center gap-2 p-3 text-white bg-secondary rounded-md  duration-500 hover:scale-110'>
              <IoMdArrowForward className='text-2xl' />
              Our Services
            </button>
            <button
              onMouseOver={onHover}
              onMouseLeave={onMouseLeave}
              className='flex items-center gap-2 p-3 text-white border border-white rounded-md  duration-500 hover:scale-105'>
              Visit Future Apps
              <AnimatePresence>
                {hover ? (
                  <motion.div
                    initial={{
                      opacity: 0,
                      x: -100,
                    }}
                    animate={{
                      opacity: 1,
                      x: 0,
                      transition: {
                        duration: 0.4,
                      },
                    }}
                    exit={{
                      opacity: 0,
                      x: -100,
                      transition: {
                        duration: 0.3,
                      },
                    }}>
                    <IoMdArrowForward className='text-2xl' />
                  </motion.div>
                ) : null}
              </AnimatePresence>
            </button>
          </div>
        </div>
        <div>
          <Image
            src={heroimage}
            alt='Microsoft Surface Pro 3'
            className=' hidden md:block'
          />
        </div>
      </div>

      <div className='circles'>
        <ul>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </>
  );
};

export default Hero;
