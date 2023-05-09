import React from 'react';
import laptopImage from '../../assets/laptop.png';
import Image from 'next/image';
import { useRouter } from 'next/router';

const Hero = () => {
  const router = useRouter();
  return (
    <div className='section-center flex justify-between items-center text-white py-24'>
      <div className='max-w-4xl'>
        <p className='text-center md:text-left  text-xl md:text-3xl mb-12'>
          Welcome to FutureAnalytics
        </p>
        <h4 className='font-bold text-center md:text-left text-2xl md:text-5xl leading-snug'>
          Pioneering Business Intelligence and Data Visualization Solutions for
          a Data-Driven Future
        </h4>
        <div className='flex justify-center md:justify-start space-x-4 mt-10'>
          <button
            onClick={() => router.push('/services')}
            className='p-3 text-white bg-primary rounded-md hover:bg-secondary'>
            Our Services
          </button>
          <button className='p-3 text-white border border-white rounded-md hover:bg-secondary'>
            Visit Future Apps
          </button>
        </div>
      </div>
      <div>
        <Image
          src={laptopImage}
          alt='laptopImage'
          className='w-[661px] h-[492px] hidden md:block'
        />
      </div>
    </div>
  );
};

export default Hero;
