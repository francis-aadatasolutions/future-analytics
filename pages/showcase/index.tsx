import Contact from '@components/contact';
import Footer from '@components/footer';
import Navbar from '@components/navbar/navbar';
import Services from '@components/services';
import Hero from '@components/showcase/hero';
import Slider from '@components/showcase/slider';
import React from 'react';

const ShowcasePage = () => {
  return (
    <main>
      <div className='relative flex flex-col justify-center items-center p-4 gradient-bg'>
        <Navbar />
        <Hero />
      </div>
      <div className='py-32'>
        <Slider />
      </div>
      <Services />
      <Contact />
      <Footer />
    </main>
  );
};

export default ShowcasePage;
