import React from 'react';
import Slider from './slider';

const Showcase = () => {
  return (
    <section className='bg-light-blue'>
      <div className='center py-24'>
        <div className='flex justify-between items-center gap-10 flex-col md:flex-row'>
          <div>
            <h4 className='capitalize font-bold text-secondary mb-3 text-3xl md:text-4xl'>
              Test drive our intuitive analytics dashboards for yourself
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
          {/* <iframe
            title='Report Section'
            width='600'
            height='373.5'
            src='https://app.powerbi.com/view?r=eyJrIjoiOTMzYjJmYmUtZTMxNC00OGJmLTgyODAtZDkwYzFlYmQ0ZTliIiwidCI6IjE1NzkwYjE2LTljYTUtNGJmMi1iZDY2LTgyY2Y3ZmYzMjUwNyJ9'
            frameBorder='0'
            allowFullScreen={true}></iframe> */}
        </div>
      </div>
    </section>
  );
};

export default Showcase;
