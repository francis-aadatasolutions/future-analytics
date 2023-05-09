import Hero from '@components/about/hero';
import OurExperts from '@components/about/ourExperts';
import Contact from '@components/contact';
import Footer from '@components/footer';
import Navbar from '@components/navbar/navbar';
import Services from '@components/services';
import AboutSection from '@components/why-choose-future-analytics/aboutSection';
import React from 'react';

const AboutPage = () => {
  return (
    <main>
      <div className='relative flex flex-col justify-center items-center p-4 gradient-bg'>
        <Navbar />
        <Hero />
      </div>
      <OurExperts />
      <AboutSection />
      <Services />
      <Contact />
      <Footer />
    </main>
  );
};

export default AboutPage;
