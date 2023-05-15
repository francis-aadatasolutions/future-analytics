import Navbar from '@components/navbar/navbar';
import React from 'react';

const Hero = () => {
  return (
    <>
      <section className='section-center text-white py-32'>
        <div className='max-w-4xl text-center md:text-left'>
          <h4 className='font-bold text-5xl leading-snug'>Case Studies</h4>
          <p className='w-full max-w-2xl text-xl mt-6 '>
            Explore how our data analytics services have helped our clients
            overcome their business challenges and achieve success.
          </p>
        </div>
      </section>

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
