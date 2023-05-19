import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { motion } from 'framer-motion';

import BtnLink from 'src/HOC/Button';
import { servicesContent } from 'src/utils/services';
import { variants } from 'src/utils/framer';
import parser from 'html-react-parser';
import { IoMdArrowForward } from 'react-icons/io';
import { FaGgCircle } from 'react-icons/fa';

import { TbHexagon3D } from 'react-icons/tb';

const Services = () => {
  const router = useRouter();
  const id = router.query.id;
  if (id || router.asPath === '/showcase' || router.asPath === '/about-us') {
    return (
      <section className='py-24 bg-light-blue'>
        <div className='center'>
          <div className='flex flex-col'>
            <div>
              <h4 className='capitalize font-bold text-secondary mb-3 text-3xl md:text-4xl'>
                our services
              </h4>
              <p className='max-w-2xl text-base'>
                At Future Analytics we offer customised data solutions to drive
                your business forward. Stay ahead of the curve with our
                comprehensive services.
              </p>
            </div>
            <div className='mt-12 md:mt-0 capitalize'>
              <BtnLink
                Icon={TbHexagon3D}
                url='/services'
                text='see what we do'
              />
            </div>
          </div>
          <div className='grid grid-cols-1 xl:grid-cols-2 gap-12 md:gap-12 xl:gap-24 mt-12'>
            {servicesContent.map((item) => {
              const { description, id, images, title, price, subTitle } = item;
              return (
                <motion.div
                  variants={variants}
                  initial='hidden'
                  whileInView='visible'
                  viewport={{ once: true, amount: 0.2 }}
                  key={id}
                  className='flex flex-col items-center md:items-start gap-4 md:flex-row'>
                  <Image
                    src={images}
                    alt={title}
                    className='w-[350px] h-[300px]'
                  />
                  <div className='flex flex-col items-center text-center md:text-left md:items-start'>
                    <h5 className='text-2xl font-semibold text-secondary mt-4'>
                      {title}
                    </h5>
                    <p>{subTitle}</p>

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
        </div>
      </section>
    );
  }
  return (
    <section className='center py-24'>
      <div className='flex flex-col '>
        <div>
          <h4 className='capitalize font-bold text-secondary mb-3 text-3xl md:text-4xl'>
            our services
          </h4>
          <p className='text-lg mt-8'>
            At Future Analytics we offer customised data solutions to drive your
            business forward. Stay ahead of the curve with our comprehensive
            services.
          </p>
        </div>
        <div className='mt-12 md:mt-8 capitalize'>
          <BtnLink Icon={TbHexagon3D} url='/services' text='see what we do' />
        </div>
      </div>
      <div className='grid grid-cols-1 xl:grid-cols-2 gap-12 md:gap-12 xl:gap-24 mt-12'>
        {servicesContent.map((item) => {
          const { description, id, images, title, price, subTitle } = item;
          return (
            <motion.div
              variants={variants}
              initial='hidden'
              whileInView='visible'
              viewport={{ once: true, amount: 0.2 }}
              key={id}
              className='flex flex-col items-center gap-4 md:flex-row'>
              <Image src={images} alt={title} className='w-[350px] h-[300px]' />
              {/* {SVGComponent} */}
              <div className='flex flex-col items-center text-center md:text-left md:items-start'>
                <h5 className='text-2xl 2xl:text-3xl font-semibold text-secondary'>
                  {title}
                </h5>

                <p className='mt-4'>{subTitle}</p>

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
  );
};

export default Services;
