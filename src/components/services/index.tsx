import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

import BtnLink from 'src/HOC/Button';
import { servicesContent } from 'src/utils/services';

const Services = () => {
  const router = useRouter();
  const id = router.query.id;
  if (id || router.asPath === '/showcase' || router.asPath === '/about-us') {
    return (
      <section className='py-24 bg-light-blue'>
        <div className='center'>
          <div className='flex flex-col md:flex-row md:justify-between'>
            <div>
              <h4 className='capitalize font-bold text-primary mb-3 text-3xl md:text-4xl'>
                our services
              </h4>
              <p className='max-w-2xl text-base'>
                At Future Analytics we offer customised data solutions to drive
                your business forward. Stay ahead of the curve with our
                comprehensive services.
              </p>
            </div>
            <div className='mt-12 md:mt-0 capitalize'>
              <BtnLink url='/services' text='see what we do' />
            </div>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-12 mt-12'>
            {servicesContent.map((item) => {
              const { description, id, images, title, price } = item;
              return (
                <div
                  key={id}
                  className='flex flex-col items-center gap-4 md:flex-row'>
                  <Image
                    src={images}
                    alt={title}
                    className='w-[200px] h-[170px]'
                  />
                  <div className='flex flex-col items-center text-center md:text-left md:items-start'>
                    <h5 className='text-2xl font-semibold text-secondary'>
                      {title}
                    </h5>
                    <p>{description}</p>
                    <div className='flex space-x-4 mt-10'>
                      <Link
                        href={`/services/service-details/${id}`}
                        className='p-3 text-primary rounded-md border border-primary capitalize hover:bg-primary hover:text-white'>
                        Read more
                      </Link>
                      <Link
                        href='/port'
                        className='p-3 text-white bg-primary rounded-md capitalize'>
                        Get Quote
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    );
  }
  return (
    <section className='center py-24'>
      <div className='flex flex-col md:flex-row md:justify-between'>
        <div>
          <h4 className='capitalize font-bold text-primary mb-3 text-3xl md:text-4xl'>
            our services
          </h4>
          <p className='max-w-2xl text-base'>
            At Future Analytics we offer customised data solutions to drive your
            business forward. Stay ahead of the curve with our comprehensive
            services.
          </p>
        </div>
        <div className='mt-12 md:mt-0 capitalize'>
          <BtnLink url='/services' text='see what we do' />
        </div>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-12 mt-12'>
        {servicesContent.map((item) => {
          const { description, id, images, title, price } = item;
          return (
            <div
              key={id}
              className='flex flex-col items-center gap-4 md:flex-row'>
              <Image src={images} alt={title} className='w-[200px] h-[170px]' />
              <div className='flex flex-col items-center text-center md:text-left md:items-start'>
                <h5 className='text-2xl font-semibold text-secondary'>
                  {title}
                </h5>
                <p>{description}</p>
                <div className='flex space-x-4 mt-10'>
                  <Link
                    href={`/services/service-details/${id}`}
                    className='p-3 text-primary rounded-md border border-primary capitalize hover:bg-primary hover:text-white'>
                    Read more
                  </Link>
                  <Link
                    href='/port'
                    className='p-3 text-white bg-primary rounded-md capitalize'>
                    Get Quote
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
