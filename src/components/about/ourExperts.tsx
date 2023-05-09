import Image from 'next/image';
import React from 'react';
import { ourExpers } from 'src/utils/ourExperts';

const OurExperts = () => {
  return (
    <section className='center py-24'>
      <h4 className='font-bold text-4xl leading-snug text-primary'>
        Our Experts
      </h4>
      <p>Meet the talented team behind Future Analytics</p>
      <div className='flex flex-col md:flex-row gap-12 md:justify-between'>
        {ourExpers.map((item, index) => {
          const { id, image, name, position } = item;
          return (
            <div key={id} className='flex flex-col items-center'>
              <Image src={image} alt={name} />
              <p className='font-semibold mt-2'>{name}</p>
              <p className='italic'>{position}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default OurExperts;
