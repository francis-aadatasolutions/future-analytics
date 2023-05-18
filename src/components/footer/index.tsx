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
            <h5 className='font-semibold uppercase'>company</h5>
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
            <h5 className='font-semibold uppercase'>Services</h5>
            <ul className='mt-8 space-y-4'>
              {servicesContent.map((item) => {
                const { id, title } = item;
                return (
                  <li key={id}>
                    <Link href={`/services/service-details/${id}`}>
                      {title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className='text-white'>
            {/* contact */}
            <h5 className='font-semibold uppercase '>Connect with us</h5>
            <div className='mt-8'>
              <div>
                <p>Gresham Works, Office 7, 38 Market Street, LE1 6DP</p>
              </div>
              <p>+441164828916</p>
              <p className='my-4'>contact@futureanalytics.com</p>
            </div>
            <div className='mt-8'>
              <h5 className='font-semibold uppercase'> follow us</h5>
              <Link href='https://www.linkedin.com/company/futureanalyticsio/'>
                <AiFillLinkedin className='text-4xl' />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
