import Image from 'next/image';
import React from 'react';
import about from '../../assets/images/aboutus/about.png';
import aboutus from '../../assets/images/aboutus/aboutus.png';

const Aboutus = () => {
  return (
    <div className=' bg-aboutus-pattern bg-cover bg-no-repeat w-full'>
      <div id='about' className='section-center py-48'>
        <h2 className='mb-8 font-semibold text-center text-4xl md:text-5xl md:mb-16'>
          About Us
        </h2>
        <div className='md:flex md:justify-between gap-16 items-center'>
          <p className='text-center  text-xl max-w-xl mx-auto'>
            Future Analytics provides cutting edge analytics, internal app
            development and automation solutions to our most valued customers.
            We are always striving to use the best frameworks and tools in the
            market to ensure we offer you with the best and most efficient
            product as we are not tied down to any single tool provider.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
