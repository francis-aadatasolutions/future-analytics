import Hero from '@components/case-studies/hero';
import RecentCaseStudies from '@components/case-studies/recent';
import Contact from '@components/contact';
import Footer from '@components/footer';
import Navbar from '@components/navbar/navbar';
import Head from 'next/head';
import React from 'react';

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
        <div className='relative flex flex-col justify-center items-center p-4 gradient-bg'>
          <Navbar />
          <Hero />
        </div>
        <RecentCaseStudies />
        <Contact />
        <Footer />
      </main>
    </>
  );
};

export default CaseStudiesPage;
