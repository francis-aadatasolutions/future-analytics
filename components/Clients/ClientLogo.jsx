import Airbnb from '@/assets/SVG/Companies/Airbnb';
import Google from '@/assets/SVG/Companies/Google';
import Microsoft from '@/assets/SVG/Companies/Mircrosoft';
import Walmart from '@/assets/SVG/Companies/Walmart';
import React from 'react';

const ClientLogo = () => {
  return (
    <div className='mt-4 bg-slate-100'>
      <div className='section-center'>
        <div className='flex justify-between gap-4 items-center '>
          <Microsoft />
          <Google />
          <Airbnb />
          <Walmart />
        </div>
      </div>
    </div>
  );
};

export default ClientLogo;
