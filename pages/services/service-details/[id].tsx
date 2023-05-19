import Contact from '@components/contact';
import Footer from '@components/footer';
import Navbar from 'src/HOC/Navigation';
import OtherServices from '@components/services/otherServices';
import Singleservices from '@components/services/singleservices';
import SuccessStories from '@components/successStories';
import React from 'react';
import BackToTopButton from 'src/HOC/BackToTopButton';

const ServiceDetails = () => {
  return (
    <>
      <main>
        <Navbar />
        <Singleservices />
        <OtherServices />
        <SuccessStories />
        <Contact />
        <Footer />
        <BackToTopButton />
      </main>
    </>
  );
};

export default ServiceDetails;
