import React from 'react';
import whychoosefutureanalytics from '../../assets/images/about/why.png';
import Image from 'next/image';
import { futureAnalyticsCardContent } from 'src/utils/futureAnalyticsCards';

const AboutSection = () => {
  return (
    <section className='center py-24'>
      <h4 className='font-bold text-4xl leading-snug text-primary'>
        Why Choose Future Analytics?
      </h4>
      <div className='flex flex-col md:flex-row md:justify-between items-center'>
        <Image
          src={whychoosefutureanalytics}
          alt='Why Choose Future Analytics'
        />
        <div>
          {futureAnalyticsCardContent.map((item, index) => {
            const { description, title } = item;
            return (
              <div key={index} className='mb-8'>
                <p className='font-semibold text-lg'>{title}</p>
                <p className='w-full max-w-5xl text-lg mt-2'>{description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
