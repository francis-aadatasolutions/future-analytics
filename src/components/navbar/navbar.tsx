import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useCallback, useEffect, useState } from 'react';
import { navbarLinks } from 'src/utils/navbarLinks';
import logo from '../../assets/logo.png';
import logodark from '../../assets/logo-dark.png';
import Image from 'next/image';
import { GiHamburgerMenu } from 'react-icons/gi';

const Navbar = () => {
  const router = useRouter();
  const id = router.query.id;
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [scrollY, setScrollY] = useState<number>(0);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  // const onScroll = useCallback(
  //   (event: any) => {
  //     const { pageYOffset, scrollY } = window;
  //     if (pageYOffset > 390) {
  //       setIsScrolled(true);
  //     } else {
  //       setIsScrolled(false);
  //     }

  //     setScrollY(window.pageYOffset);
  //   },
  //   [scrollY]
  // );

  // useEffect(() => {
  //   //add eventlistener to window
  //   const options = { passive: true } as any;
  //   window.addEventListener('scroll', onScroll, options);
  //   // remove event on unmount to prevent a memory leak with the cleanup
  //   return () => {
  //     window.removeEventListener('scroll', onScroll, options);
  //   };
  // }, []);

  return (
    <header
      className={`w-full  z-20 top-0 left-0 transition-all duration-200
    ${
      id || router.pathname === '/contact-us' ? 'text-black ' : 'text-white'
    } `}>
      <div className='md:py-12'>
        <div className='flex justify-between items-center center'>
          <Link href='/'>
            <Image
              src={id || router.pathname === '/contact-us' ? logodark : logo}
              alt='Future Analytics Logo'
            />
          </Link>
          <button onClick={() => setIsOpen(!isOpen)}>
            <GiHamburgerMenu className='text-4xl text-white md:hidden' />
          </button>
          <nav className='hidden md:block'>
            <ul className='flex gap-12'>
              {navbarLinks.map((item) => {
                const { id, name, url } = item;
                return (
                  <li className='uppercase ' key={id}>
                    <Link
                      href={url}
                      className={
                        router.pathname === url
                          ? 'pb-2 border-b-2  border-b-[#709cef] text-[#7aa6f8]'
                          : ''
                      }>
                      {name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>

        {isOpen && (
          <nav className='center p-4 bg-[#80aaff] rounded-xl mt-3 text-white'>
            <ul className='flex flex-col gap-4'>
              {navbarLinks.map((item) => {
                const { id, name, url } = item;
                return (
                  <li
                    onClick={() => setIsOpen(false)}
                    className='capitalize hover:bg-primary p-4 rounded-lg hover:text-white'
                    key={id}>
                    <Link href={url}>{name}</Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;
