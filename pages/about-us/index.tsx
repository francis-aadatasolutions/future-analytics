import Hero from '@components/about/hero';
import OurExperts from '@components/about/ourExperts';
import Contact from '@components/contact';
import Footer from '@components/footer';
import Navbar from 'src/HOC/Navigation';
import Services from '@components/services';

import Head from 'next/head';
import React from 'react';
import LeadershipSection from '@components/about/leadershipSection';
import BackToTopButton from 'src/HOC/BackToTopButton';

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
        <div className='relative flex flex-col justify-center items-center'>
          <Navbar />
          <Hero />
        </div>

        <LeadershipSection />
        <Services />
        <Contact />
        <Footer />
        <BackToTopButton />
      </main>
    </>
  );
};

export default AboutPage;
