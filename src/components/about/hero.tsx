import Image from 'next/image';
import React from 'react';
import hero from '../../assets/images/about/hero.png';

const Hero = () => {
  return (
    <>
      <div className='section-center flex justify-between items-center gap-7 text-white py-24'>
        <div className='max-w-3xl'>
          <h4 className='font-bold text-5xl leading-snug text-center md:text-left'>
            About us
          </h4>
          <p className='text-xl  mt-8'>
            At Future Analytics, we believe in the power of data-driven
            decision-making to shape the future of your business. Our diverse
            team of web developers, data engineers, and data visualization
            experts is committed to delivering creative and innovative solutions
            that empower your organization to thrive in the ever-evolving
            digital landscape.
          </p>
        </div>
        <div>
          <Image src={hero} alt='Servicehero' className='hidden md:block' />
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
