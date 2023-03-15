import { NavbarLinks } from '@/assets/NavbarLinks';
import Aboutus from '@/components/About/Aboutus';
import PastClients from '@/components/Clients/PastClient';
import Contact from '@/components/contact/Contact';
import { CTASection } from '@/components/CTA/CTASection';
import Footer from '@/components/Footer/Footer';
import Headers from '@/components/header';
import Services from '@/components/Services';
import Slider from '@/components/Slider';
import { AnimatePresence, motion } from 'framer-motion';
import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';

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
      <main>
        <div className=''>
          <div className='relative bg-hero-pattern bg-cover bg-no-repeat w-full h-screen'>
            <Headers setIsOpen={setIsOpen} isOpen={isOpen} />
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  className='absolute mx-auto pt-8 w-full md:hidden  flex flex-col gap-8 items-center font-semibold responsive-mobile-gradient z-50'
                  variants={item}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: '100vh', opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  exit='exit'>
                  {NavbarLinks.map((links) => {
                    const { id, name, link, icon, textSize } = links;
                    return (
                      <Link href={link} key={id} className=''>
                        <p className='text-xl text-white'>{name}</p>
                      </Link>
                    );
                  })}
                </motion.div>
              )}
            </AnimatePresence>
            <div className='section-center'>
              <CTASection />
            </div>
          </div>
        </div>

        <Slider />

        <Services />
        <PastClients />
        <Aboutus />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
