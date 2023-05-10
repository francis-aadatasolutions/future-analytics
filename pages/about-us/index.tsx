import Hero from '@components/about/hero';
import OurExperts from '@components/about/ourExperts';
import Contact from '@components/contact';
import Footer from '@components/footer';
import Navbar from '@components/navbar/navbar';
import Services from '@components/services';
import AboutSection from '@components/why-choose-future-analytics/aboutSection';
import Head from 'next/head';
import React from 'react';

const AboutPage = () => {
  return (
    <>
      <Head>
        <title>Future Analytics</title>
        <meta name='description' content='Future Analytics' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        <div className='relative flex flex-col justify-center items-center p-4 gradient-bg'>
          <Navbar />
          <Hero />
        </div>
        {/* <OurExperts /> */}
        <AboutSection />
        <Services />
        <Contact />
        <Footer />
      </main>
    </>
  );
};

export default AboutPage;
