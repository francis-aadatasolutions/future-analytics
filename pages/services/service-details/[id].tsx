import Contact from '@components/contact';
import Footer from '@components/footer';
import Navbar from '@components/navbar/navbar';
import OtherServices from '@components/services/otherServices';
import Singleservices from '@components/services/singleservices';
import SuccessStories from '@components/successStories';
import React from 'react';

const ServiceDetails = () => {
  return (
    <>
      <Navbar />
      <Singleservices />
      <SuccessStories />
      <OtherServices />
      <Contact />
      <Footer />
    </>
  );
};

export default ServiceDetails;
