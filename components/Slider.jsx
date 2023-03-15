import React from 'react';
import powerBi from '../assets/images/technologies/Power-BI.png';
import cubedev from '../assets/images/technologies/cubedev.png';
import azure from '../assets/images/technologies/azure.png';
import react from '../assets/images/technologies/react.png';
import vega from '../assets/images/technologies/vega.png';
import Image from 'next/image';

const Slider = () => {
  return (
    <div className='mt-20 mb-32'>
      <div className=' section-center flex flex-col md:flex-row items-center md:gap-20'>
        <h1 className='text-center'>Technologies we&apos;re using</h1>
        <div className='slider'>
          <div className='slide-track'>
            <div className='slide'>
              <Image src={powerBi} className='w-16 h-16' alt='PowerBI' />
            </div>
            <div className='slide'>
              <Image src={azure} className='w-[5rem] h-14' alt='Azure' />
            </div>
            <div className='slide'>
              <Image src={cubedev} className='w-32  h-16' alt='Cubedev' />
            </div>
            <div className='slide'>
              <Image src={react} className='w-16 h-16' alt='ReactJS' />
            </div>
            <div className='slide'>
              <Image src={vega} className='w-16 h-16' alt='Vega' />
            </div>
            <div className='slide'>
              <Image src={powerBi} className='w-16 h-16' alt='PowerBI' />
            </div>
            <div className='slide'>
              <Image src={azure} className='w-[5rem] h-14' alt='Azure' />
            </div>
            <div className='slide'>
              <Image src={cubedev} className='w-32  h-16' alt='Cubedev' />
            </div>
            <div className='slide'>
              <Image src={react} className='w-16 h-16' alt='ReactJS' />
            </div>
            <div className='slide'>
              <Image src={vega} className='w-16 h-16' alt='Vega' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
