import { NavbarLinks } from '@/assets/NavbarLinks';
import { LogolongWeb } from '@/assets/SVG/LogoBlack';
import Aboutus from '@/components/About/Aboutus';
import PastClients from '@/components/Clients/PastClient';
import Contact from '@/components/contact/Contact';
import { CTASection } from '@/components/CTA/CTASection';
import Footer from '@/components/Footer/Footer';
import Headers from '@/components/header';
import MaintenanceLogo from '@/components/MaintenanceLogo';
import Services from '@/components/Services';
import Slider from '@/components/Slider';
import { AnimatePresence, motion } from 'framer-motion';
import Head from 'next/head';
import Link from 'next/link';

import { useState } from 'react';
import { AiFillCloseCircle } from 'react-icons/ai';

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const item = {
    exit: {
      opacity: 0,
      height: 0,
      transition: {
        ease: 'easeInOut',
        duration: 0.3,
        // delay: 0.5,
      },
    },
  };
  return (
    <>
      <Head>
        <title>Future Analytics</title>
        <meta name='description' content='Future Analytics' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className='section-center relative'>
        <AnimatePresence>
          {isOpen && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className='modal-backdrop'
                onClick={() => setIsOpen(false)}
              />
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className='content scrollbar-hide'>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}>
                  <div className='flex justify-end text-4xl mb-8 cursor-pointer'>
                    <AiFillCloseCircle onClick={() => setIsOpen(false)} />
                  </div>
                  <Contact />
                </motion.div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
        <div className='p-4'>
          <LogolongWeb />
        </div>
        <div className='flex flex-col items-center mt-16 md:flex-row md:justify-between'>
          <div className='text-center'>
            <h1 className='uppercase text-center font-semibold primary-text md:text-[4rem] leading-snug'>
              <p>Website is</p>
              Under <br /> Contruction
            </h1>
            <div className='mt-16'>
              <button
                onClick={() => setIsOpen(true)}
                className='p-4 rounded-xl primary-bg text-white'>
                Contact Us
              </button>
            </div>
          </div>
          <div className='hidden md:block'>
            <MaintenanceLogo />
          </div>
        </div>
      </main>
    </>
  );
}
