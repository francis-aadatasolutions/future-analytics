import Image from 'next/image';
import React from 'react';
import BtnLink from 'src/HOC/Button';
import { futureAnalyticsCardContent } from 'src/utils/futureAnalyticsCards';

const WhyChooseFutureAnalytics = () => {
  return (
    <section className='py-24 bg-light-blue'>
      <div className='center '>
        <div className='flex flex-col md:flex-row md:justify-between'>
          <div>
            <h4 className='capitalize font-bold text-primary mb-3 text-3xl md:text-4xl'>
              Why choose future analytics?
            </h4>
          </div>
          <div className='mt-12 md:mt-0'>
            <BtnLink url='/about-us' text='Find out more about us' />
          </div>
        </div>
        <div className='mt-24'>
          <div className='grid grid-cols-1 gap-8 md:grid-cols-5 drop-shadow-md'>
            {futureAnalyticsCardContent.map((item, index) => {
              const { icon, title } = item;
              return (
                <article
                  key={index}
                  className='flex flex-col items-center text-center p-8 bg-white rounded-xl'>
                  <Image src={icon} alt={title} />
                  <p className='text-xl font-semibold mt-4'>{title}</p>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseFutureAnalytics;
