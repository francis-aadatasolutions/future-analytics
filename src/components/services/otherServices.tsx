import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { servicesContent } from 'src/utils/services';

const OtherServices = () => {
  const router = useRouter();
  const id = router.query.id;

  const serviceContent = servicesContent.filter((item) => item.id !== id);

  return (
    <section className=' py-24 bg-light-blue'>
      <div className='center'>
        <h4 className='capitalize font-bold text-primary mb-3 md:mb-12 text-3xl md:text-4xl'>
          Other Services
        </h4>
      </div>
      <div className='section-center'>
        <div className='grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-24'>
          {serviceContent.slice(0, 3).map((item) => {
            const { description, id, images, title, price } = item;
            return (
              <div key={id} className='flex flex-col items-center'>
                <Image
                  src={images}
                  alt={title}
                  className='w-[200px] h-[170px]'
                />
                <div className='flex flex-col items-center text-center md:text-left md:items-start'>
                  <h5 className='text-2xl font-semibold text-secondary '>
                    {title}
                  </h5>
                  <p className='max-w-xl'>{description.substring(0, 200)}...</p>
                  <div className='flex space-x-4 mt-10'>
                    <Link
                      href={`/services/service-details/${id}`}
                      className='p-3 text-primary rounded-md border border-primary capitalize hover:bg-primary hover:text-white'>
                      Read more
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
};

export default OtherServices;
