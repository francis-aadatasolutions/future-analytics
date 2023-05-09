import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { servicesContent } from 'src/utils/services';
import databricks from '../../assets/images/services/databricks.png';
import powerBI from '../../assets/images/services/pbi.png';
import semanticLayer from '../../assets/images/services/semanticlayer.png';
import webApps from '../../assets/images/services/web-apps.png';

const ListOfServices = () => {
  return (
    <section className='section-center py-24'>
      <div className='space-y-24'>
        {servicesContent.map((item) => {
          const { description, id, images, title, price } = item;
          return (
            <div
              key={id}
              className='flex flex-col items-center gap-8  md:flex-row reverse'>
              <Image src={images} alt={title} className='w-[200px] h-[170px]' />
              <div className='flex flex-col items-center text-center md:text-left md:items-start'>
                <h5 className='text-2xl font-semibold text-secondary '>
                  {title}
                </h5>
                <p className='max-w-xl'>{description.substring(0, 200)}...</p>
                <div className='flex space-x-4 mt-10'>
                  <Link
                    href={`/services/service-details/${id}`}
                    className='p-3 text-primary rounded-md border border-primary capitalize'>
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

export default ListOfServices;
