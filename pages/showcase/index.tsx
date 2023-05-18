import Contact from '@components/contact';
import Footer from '@components/footer';
import Navbar from 'src/HOC/Navigation';
import Services from '@components/services';
import Hero from '@components/showcase/hero';
import Slider from '@components/showcase/slider';
import Head from 'next/head';
import React from 'react';

const ShowcasePage = () => {
  return (
    <>
      <Head>
        <title>Show Case</title>
        <meta name='description' content='Future Analytics' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
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
    </>
  );
};

export default ShowcasePage;
