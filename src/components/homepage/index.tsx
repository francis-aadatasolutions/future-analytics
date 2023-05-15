import Navbar from '@components/navbar/navbar';
import React from 'react';
import Hero from './hero';

const HomePage = () => {
  return (
    <main className='relative flex flex-col justify-center items-center p-4  gradient-bg'>
      <Navbar />
      <Hero />
    </main>
  );
};

export default HomePage;
