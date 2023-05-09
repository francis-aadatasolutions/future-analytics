import React from 'react';
import Slider from './slider';

const Showcase = () => {
  return (
    <section className='bg-light-blue'>
      <div className='center py-24'>
        <div className='flex justify-between items-center gap-10 flex-col md:flex-row'>
          <div>
            <h4 className='capitalize font-bold text-primary mb-3 text-3xl md:text-4xl'>
              Showcase
            </h4>
            <p className='max-w-4xl text-lg mt-8'>
              See how our custom-built apps have transformed businesses and
              improved user experiences, delivering measurable results for our
              clients.
            </p>
          </div>
        </div>
        <div className='mt-8'>
          <Slider />
        </div>
      </div>
    </section>
  );
};

export default Showcase;
