import Image from 'next/image';
import React from 'react';
import cogress from '../../assets/images/companies/cogress.jpeg';
import hexcel2 from '../../assets/images/companies/hexcel2.png';
import intertek from '../../assets/images/companies/Intertek_Logo.jpg';

import sycamore_square from '../../assets/images/companies/sycamore_square.jpeg';
import aqovia from '../../assets/images/companies/aqovia.png';
import intale from '../../assets/images/companies/intale.png';

const PastClients = () => {
  return (
    <div id='' className=' py-24 bg-slate-100'>
      <div className='section-center '>
        <h2 className='mb-8 font-semibold text-center text-4xl md:text-5xl md:mb-16'>
          Our Past Clients
        </h2>
        <div>
          {/* <div className='flex items-center justify-between'> */}
          <div className='grid grid-cols-2 md:flex md:justify-between items-center'>
            <Image src={hexcel2} alt='hexcel' className='w-32 h-16' />
            <Image src={intertek} alt='intertek' className='w-32 h-16' />
            <Image src={cogress} alt='cogress' className='w-32 h-32' />
            <Image src={intale} alt='Intale' className='w-24 h-24' />
            <Image
              src={sycamore_square}
              alt='sycamore_square'
              className='w-24 h-24'
            />
            <Image src={aqovia} alt='Aqovia' className='w-24 h-24' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PastClients;
