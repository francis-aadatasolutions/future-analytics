import React from 'react';
import { Logolong, LogolongWeb } from '@/assets/SVG/Longlong';
import Link from 'next/link';

const Footer = () => {
  return (
    <div className='pt-16 w-full bg-blue-400 text-white mt-32'>
      <div className='section-center'>
        <div>
          <div className='md:flex md:justify-between'>
            <div className='mt-4 flex flex-col gap-3 text-xl'>
              <LogolongWeb />
              <p>Gresham Works, Office 7, Market Street</p>
              <p>LE1 6DP - Leicester</p>
              <p>United Kingdom (UK)</p>
            </div>
            <div className='flex justify-between mt-8 md:mt-0 md:gap-64 '>
              <div>
                <h2 className='font-semibold text-2xl'>About</h2>
                <div className='flex flex-col gap-3 text-xl mt-4'>
                  <Link href='/'>
                    <p className='hover:ml-4'>Home</p>
                  </Link>
                  <Link href='/'>Services</Link>
                  <Link href='/'>About Us</Link>
                  <Link href='/'>Contact</Link>
                </div>
              </div>
              <div>
                <h2 className='font-semibold text-2xl'>Socials</h2>
                <div className='flex flex-col gap-3 text-xl mt-4'>
                  <Link href='/'>Facebook</Link>
                  <Link href='/'>Twitter</Link>
                  <Link href='/'>Instagram</Link>
                  <Link href='/'>LinkedIn</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr className='my-8 ' />
        <div>
          <p className='text-xl text-center pb-4'>
            &#169; 2022-2023 Future Analytics. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
