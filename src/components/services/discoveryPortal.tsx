import Image from 'next/image';
import React from 'react';
import discoveryportalimage from '../../assets/images/services/dicoveryportalimage.png';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { variants } from 'src/utils/framer';
import BtnLink from 'src/HOC/Button';

const Discoveryportal = () => {
  return (
    <section className='bg-light-blue py-24'>
      <div className='section-center'>
        <motion.div
          variants={variants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.2 }}
          className='flex justify-between items-center gap-10 flex-col md:flex-row'>
          <div>
            <h4 className='capitalize font-bold text-secondary mb-3 text-3xl md:text-4xl'>
              Register on our discovery portal and receive a quote within 24
              hours.
            </h4>
            <p className='max-w-4xl text-lg mt-8'>
              At Future Analytics, we're dedicated to helping you unlock the
              full potential of your data. Our diverse range of services is
              designed to provide you with the tools and insights you need to
              drive your business forward. Contact us today to learn more about
              how Future Analytics can revolutionize your data analytics
              strategy.
            </p>
            <div className='mt-8'>
              <BtnLink
                text='Visit discovery portal'
                url='https://futureanalyticsportal.vercel.app'
                className='p-3 text-white bg-secondary rounded-md capitalize'
              />
            </div>
          </div>
          <Image src={discoveryportalimage} alt='Data Trends' />
        </motion.div>
      </div>
    </section>
  );
};

export default Discoveryportal;
