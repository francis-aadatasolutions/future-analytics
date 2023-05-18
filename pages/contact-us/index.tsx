import Contact from '@components/contact';
import Footer from '@components/footer';
import Navbar from 'src/HOC/Navigation';
import Head from 'next/head';
import React from 'react';

const ContactUs = () => {
  return (
    <>
      <Head>
        <title>Contact Us</title>
        <meta name='description' content='Future Analytics' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        <Navbar />
        <Contact />
        <Footer />
      </main>
    </>
  );
};

export default ContactUs;
