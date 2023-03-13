import Image from 'next/image';
import React from 'react';
import aboutus from '../../assets/images/aboutus/about.png';

const Aboutus = () => {
  return (
    <div id='about' className='section-center py-48'>
      <h2 className='mb-8 font-semibold text-center text-4xl md:text-5xl md:mb-16'>
        About Us
      </h2>
      <div className='md:flex md:justify-between gap-24 items-center'>
        <Image
          src={aboutus}
          alt='aboutus'
          className='hidden w-[35rem] h-[30rem] md:block'
        />
        <p className='text-center md:text-left text-xl'>
          Future Analytics provides cutting edge analytics, internal app
          development and automation solutions to our most valued customers. We
          are always striving to use the best frameworks and tools in the market
          to ensure we offer you with the best and most efficient product as we
          are not tied down to any single tool provider.
        </p>
      </div>
    </div>
  );
};

export default Aboutus;
