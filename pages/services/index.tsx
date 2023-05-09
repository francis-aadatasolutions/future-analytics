import Contact from '@components/contact';
import Footer from '@components/footer';
import Navbar from '@components/navbar/navbar';
import Discoveryportal from '@components/services/discoveryPortal';
import Hero from '@components/services/hero';
import ListOfServices from '@components/services/listOfServices';
import React from 'react';

const ServicePage = () => {
  return (
    <main>
      <div className='relative flex flex-col justify-center items-center p-4 gradient-bg'>
        <Navbar />
        <Hero />
      </div>
      <ListOfServices />
      <Discoveryportal />
      <Contact />
      <Footer />
    </main>
  );
};

export default ServicePage;
