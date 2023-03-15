import cta from '../../assets/cta.png';
import { motion } from 'framer-motion';

import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import Image from 'next/image';

export const CTASection = () => {
  return (
    <div className='mt-8 md:mt-0'>
      <div className='flex flex-col md:flex-row md:justify-between items-center gap-48'>
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{
            opacity: 1,
            y: 50,
            transition: {
              delay: 0.5,
              duration: 0.5,
            },
          }}
          className='text-center md:text-left md:mt-8'>
          <h1 className='font-semibold text-[2.5rem] leading-tight md:leading-tight md:text-6xl'>
            <span className='primary-text md:text-[7rem]'>Supercharge</span>{' '}
            <div className='md:hidden'>
              <TypeAnimation
                className='font-semibold text-xs mt-3 text-white'
                sequence={[
                  'Your consultancy offering',
                  1000,
                  'Your Data with Our AI Services',
                  1000,
                  'Your Business with Custom Data Visualizations',
                ]}
                wrapper='div'
                cursor={true}
                repeat={0}
                style={{ fontSize: '2rem', lineHeight: '2rem' }}
              />
            </div>
            <div className='hidden md:block'>
              <TypeAnimation
                className='font-semibold text-xs mt-3 text-white'
                sequence={[
                  1000,
                  'Your consultancy offering',
                  1000,
                  'Your Data with Our AI Services',
                  1000,
                  'Your Business with Custom Data Visualizations',
                ]}
                wrapper='div'
                cursor={true}
                repeat={0}
                style={{ fontSize: '3rem', lineHeight: '5rem' }}
              />
            </div>
          </h1>
          {/* <p className='text-lg my-8 text-slate-400 md:w-[40rem]'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
            iure tempore deserunt facilis aut porro, eos tempora cumque ad
            recusandae? Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Dignissimos
          </p> */}
          {/* <div className='mt-8'>
            <button className='p-3 text-white primary-bg rounded-full'>
              Get Started
            </button>
          </div> */}
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: 1,
            scale: 1,
            transition: {
              delay: 0.3,
              duration: 0.7,
            },
          }}
          className=''>
          <Image src={cta} alt='CTA' />
        </motion.div>
      </div>
    </div>
  );
};

{
  /* <CTANEW /> */
}
{
  /* <SVGCTA /> */
}
