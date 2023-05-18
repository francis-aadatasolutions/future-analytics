import Image from 'next/image';
import React from 'react';
import servicehero1 from '../../assets/images/services/servicehero1.png';
import BtnLink from 'src/HOC/Button';
import { FaGgCircle } from 'react-icons/fa';

const Hero = () => {
  return (
    <>
      <div className='section-center flex justify-between items-center text-white py-12'>
        <div className='max-w-4xl'>
          <h4 className='text-center md:text-left  text-xl md:text-5xl mb-12 font-bold  leading-snug '>
            Custom solutions for your business needs
          </h4>
          <p className='text-center md:text-left'>
            At Future Analytics, we offer a comprehensive range of services to
            help you harness the power of data and drive your business forward.
            Our solutions are tailored to meet your unique needs, ensuring that
            you stay ahead of the curve in the rapidly evolving world of data
            analytics.
          </p>
          <div className='flex justify-center md:justify-start mt-10'>
            <BtnLink
              Icon={FaGgCircle}
              text='Get Quote'
              url='https://futureanalyticsportal.vercel.app/'
            />
          </div>
        </div>
        <div>
          <Image
            src={servicehero1}
            alt='Servicehero'
            className='w-[573px] h-[520px] hidden md:block'
          />
        </div>
      </div>
    </>
  );
};

export default Hero;
