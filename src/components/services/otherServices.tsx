import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { IoMdArrowForward } from 'react-icons/io';
import BtnLink from 'src/HOC/Button';
import { servicesContent } from 'src/utils/services';

const OtherServices = () => {
  const router = useRouter();
  const id = router.query.id;

  const serviceContent = servicesContent.filter((item) => item.id !== id);

  return (
    <section className=' py-24 bg-light-blue'>
      <div className='center'>
        <h4 className='capitalize font-bold text-secondary mb-3 md:mb-12 text-3xl md:text-4xl'>
          Other Services
        </h4>
      </div>
      <div className='section-center'>
        <div className='grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-24'>
          {serviceContent.slice(0, 3).map((item) => {
            const { description, id, images, title, subTitle } = item;
            return (
              <div key={id} className='flex flex-col items-center'>
                <Image
                  src={images}
                  alt={title}
                  className='w-[400px] h-[300px]'
                />
                <div className='flex flex-col items-center text-center md:text-left md:items-start'>
                  <h5 className='text-xl font-semibold text-secondary '>
                    {title}
                  </h5>
                  <p className='mt-4'>{subTitle.substring(0, 100)}...</p>
                  <div className='flex space-x-4 mt-10'>
                    <BtnLink
                      Icon={IoMdArrowForward}
                      text='Read more'
                      url={`/services/service-details/${id}`}
                      className='p-3 text-primary rounded-md border border-primary capitalize hover:bg-primary hover:text-white'
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default OtherServices;
