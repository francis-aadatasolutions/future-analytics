import React from 'react';
import laptopImage from '../../assets/laptop.png';
import laptopImage2 from '../../assets/laptop2.png';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
  const router = useRouter();
  return (
    <div className='hero-center grid grid-cols-1 md:grid-cols-2 items-center text-white py-32'>
      <div className='max-w-3xl'>
        <p className='text-center md:text-left  text-xl md:text-3xl mb-12'>
          Welcome to FutureAnalytics
        </p>

        <TypeAnimation
          className='font-bold text-center md:text-left text-2xl md:text-5xl md:leading-normal'
          sequence={[
            ' Pioneering Business Intelligence and Data Visualization Solutions for a Data-Driven Future',
          ]}
          wrapper='h4'
          cursor={true}
          repeat={0}
        />

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
          src={laptopImage2}
          alt='Microsoft Surface Pro 3'
          className=' hidden md:block'
        />
      </div>
    </div>
  );
};

export default Hero;
