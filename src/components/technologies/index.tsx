import React from 'react';
import {
  azure,
  cube,
  databricks,
  react,
  refine,
  vega,
} from '../../assets/images/technologies';
import Image from 'next/image';

const Technologies = () => {
  const technologies = [
    {
      name: 'azure',
      image: azure,
    },
    { name: 'cube', image: cube },
    { name: 'databricks', image: databricks },
    { name: 'react JS', image: react },
    { name: 'refine dev', image: refine },
    { name: 'vega', image: vega },
  ];
  return (
    <section>
      <div className='center py-24'>
        <div>
          <h4 className='capitalize font-bold text-primary mb-3 text-3xl md:text-4xl'>
            Technology Partners
          </h4>
          <p className='max-w-2xl text-base'>
            We are proud to work with a range of technology partners, including
            Databricks, Power BI, and more. This enables us to offer our clients
            the best solutions tailored to their specific needs as they navigate
            the future of data-driven decision-making.
          </p>
        </div>
        <div className='mt-24 grid grid-cols-2 items-center gap-10 md:flex md:justify-between'>
          {technologies.map((item, index) => {
            const { name, image } = item;
            return (
              <div key={index}>
                <Image src={image} alt={name} className='w-24' />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Technologies;
