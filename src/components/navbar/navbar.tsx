import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { navbarLinks } from 'src/utils/navbarLinks';
import logo from '../../assets/logo.png';
import logodark from '../../assets/logo-dark.png';
import Image from 'next/image';

const Navbar = () => {
  const router = useRouter();
  const id = router.query.id;
  // path+'/'+id?
  // 'fixed top-0 max-w-screen w-full z-10 px-24 py-4 flex flex-row justify-between items-center text-white'

  return (
    <header
      className={
        id || router.pathname === '/contact-us'
          ? ' max-w-screen w-full z-10 px-24 py-4 flex flex-row justify-between items-center text-black'
          : ' max-w-screen w-full z-10 px-24 py-4 flex flex-row justify-between items-center text-white'
      }>
      <div>
        <Link href='/'>
          {id || router.asPath === '/contact-us' ? (
            <Image src={logodark} alt='Future Analytics Logo' />
          ) : (
            <Image src={logo} alt='Future Analytics Logo' />
          )}
        </Link>
      </div>
      <nav>
        <ul className='flex flex-row w-full h-full justify-end items-center gap-12'>
          {navbarLinks.map((item) => {
            const { id, name, url } = item;
            return (
              <li className='uppercase' key={id}>
                <Link href={url}>{name}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
