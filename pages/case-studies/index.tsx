import Hero from '@components/case-studies/hero';
import RecentCaseStudies from '@components/case-studies/recent';
import Contact from '@components/contact';
import Footer from '@components/footer';
import Navbar from 'src/HOC/Navigation';
import Head from 'next/head';
import React from 'react';
import BackToTopButton from 'src/HOC/BackToTopButton';

const CaseStudiesPage = () => {
  return (
    <>
      <Head>
        <title>Case Studies</title>
        <meta name='description' content='Future Analytics' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        <div className='relative flex flex-col justify-center items-center p-4 bg-dark-blue'>
          <Navbar />
          <Hero />
        </div>
        <RecentCaseStudies />
        <Contact />
        <Footer />
        <BackToTopButton />
      </main>
    </>
  );
};

export default CaseStudiesPage;
