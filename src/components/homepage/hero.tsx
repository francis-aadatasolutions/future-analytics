import React, { useEffect, useState } from 'react';

// import heroimage from '../../assets/images/hero/homepage/newlaptop.png';
import heroimage from '../../assets/images/hero/homepage/hero.png';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { TypeAnimation } from 'react-type-animation';
import { IoMdArrowForward } from 'react-icons/io';
import { AnimatePresence, motion, useAnimation } from 'framer-motion';

const Hero = () => {
  const controls = useAnimation();

  const router = useRouter();
  const [hover, setHover] = useState<boolean>(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      controls.start({ scale: 1, marginLeft: 0 });
    }, 2000);

    return () => clearTimeout(timeout);
  }, [controls]);

  const onHover = () => {
    setHover(true);
  };

  const onMouseLeave = () => {
    setHover(false);
  };

  return (
    <div className='center pt-4  pb-32'>
      <div className=' grid grid-cols-1 md:grid-cols-[400px_2fr] lg:grid-cols-[500px_2fr] 2xl:grid-cols-[600px_2fr] text-white'>
        <div className=' md:ml-24'>
          <motion.div
            className='absolute z-50'
            initial={{ scale: 1.2, marginLeft: 70 }}
            animate={controls}
            transition={{
              duration: 0.5,
              ease: 'easeInOut',
            }}>
            <TypeAnimation
              className=' text-center md:text-left text-3xl md:text-[2.5rem] md:leading-normal font-semibold '
              sequence={['Data made simple and personal']}
              speed={70}
              cursor={false}
              wrapper='h4'
              repeat={0}
            />
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 90 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: {
                delay: 3,
                duration: 0.6,
              },
            }}
            className='text-center text-2xl mt-24 md:text-left'>
            We build data solutions <br /> and apps for lasting impact
          </motion.p>
        </div>
        <motion.div
          className='relative'
          initial={{ opacity: 0, y: 100 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: {
              delay: 1.5,
              duration: 0.4,
            },
          }}>
          <Image
            src={heroimage}
            alt='Microsoft Surface Pro 3'
            className=' absolute top-0 z-10 hidden  md:flex md:justify-end items-end h-[400px]'
          />
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.7,
          },
        }}
        className='flex justify-center md:justify-start space-x-4 mt-10 md:mt-20'>
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
      </motion.div>
    </div>
  );
};

export default Hero;
