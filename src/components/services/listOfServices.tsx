import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { servicesContent } from 'src/utils/services';
import { variants } from 'src/utils/framer';
import { motion } from 'framer-motion';
import parser from 'html-react-parser';
import BtnLink from 'src/HOC/Button';
import { IoMdArrowForward } from 'react-icons/io';
import { FaGgCircle } from 'react-icons/fa';

const ListOfServices = () => {
  return (
    <div className='bg-hero-circle  bg-cover bg-no-repeat  w-full h-full'>
      <section className='section-center py-24'>
        <div className=''>
          {servicesContent.map((item) => {
            const {
              id,
              images,
              title,
              price,
              subTitle,
              shortTitle,
              servicePageTitle,
            } = item;
            return (
              <motion.div
                variants={variants}
                initial='hidden'
                whileInView='visible'
                viewport={{ once: true }}
                key={id}
                className='flex flex-col items-center gap-8  md:py-8  md:flex-row reverse'>
                <Image
                  src={images}
                  alt={title}
                  className='w-[500px] h-[500px]'
                />

                <div className='flex flex-col items-center text-center md:text-left md:items-start custom-even-child'>
                  <p className='text-2xl md:text-5xl font-semibold text-secondary '>
                    {servicePageTitle ? servicePageTitle : title}
                  </p>
                  <div className='mt-4 md:mt-8'>
                    {shortTitle ? (
                      <p className='md:text-xl'>{shortTitle}</p>
                    ) : (
                      <p>{subTitle}</p>
                    )}
                  </div>
                  <div className='flex space-x-4 mt-10'>
                    <BtnLink
                      Icon={IoMdArrowForward}
                      text='Read more'
                      url={`/services/service-details/${id}`}
                      className='p-3 text-primary rounded-md border border-primary capitalize hover:bg-primary hover:text-white'
                    />
                    <BtnLink
                      Icon={FaGgCircle}
                      text='Get Quote'
                      url='https://futureanalyticsportal.vercel.app/'
                    />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default ListOfServices;
