import SingleCaseStudyDetails from '@components/case-studies/singleCaseStudy';
import Contact from '@components/contact';
import Footer from '@components/footer';
import Navbar from 'src/HOC/Navigation';
import Services from '@components/services';
import SuccessStories from '@components/successStories';
import React from 'react';
import BackToTopButton from 'src/HOC/BackToTopButton';

const CaseStudyDetails = () => {
  return (
    <main>
      <Navbar />
      <SingleCaseStudyDetails />
      <SuccessStories />
      <Services />
      <Contact />
      <Footer />
      <BackToTopButton />
    </main>
  );
};

export default CaseStudyDetails;
