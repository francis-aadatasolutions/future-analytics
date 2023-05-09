import Link from 'next/link';
import React from 'react';
import { navbarLinks } from 'src/utils/navbarLinks';
import { servicesContent } from 'src/utils/services';
import { AiFillLinkedin } from 'react-icons/ai';

const Footer = () => {
  return (
    <footer className='bg-secondary'>
      <div className='center py-24'>
        <div className='flex flex-col gap-12 md:flex-row md:justify-between'>
          <div className='text-white'>
            {/* links */}
            <h5 className='font-semibold text-xl'>Links</h5>
            <ul className='mt-8 space-y-4'>
              {navbarLinks.map((item) => {
                const { id, name, url } = item;
                return (
                  <li key={id}>
                    <Link href={url} className='capitalize '>
                      {name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className='text-white'>
            {/* services */}
            <h5 className='font-semibold text-xl'>Services</h5>
            <ul className='mt-8 space-y-4'>
              {servicesContent.map((item) => {
                const { id, title } = item;
                return (
                  <li key={id}>
                    <Link href='#'>{title}</Link>;
                  </li>
                );
              })}
            </ul>
          </div>
          <div className='text-white'>
            {/* contact */}
            <h5 className='font-semibold text-xl'>Services</h5>
            <div className='mt-8'>
              <div>
                <p>123 Green Street</p>
                <p> Mayfair, London W1K 6RJ</p>
                <p>United Kingdom</p>
              </div>
              <p className='my-4'>contact@futureanalytics.com</p>
              <p>+44 20 1234 5678</p>
            </div>
            <div>
              <Link href='#'>
                <AiFillLinkedin />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
