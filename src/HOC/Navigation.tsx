import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useCallback, useEffect, useState } from 'react';
import { navbarLinks } from 'src/utils/navbarLinks';
import logo from '../assets/logo.png';
import logodark from '../assets/logo-dark.png';
import Image from 'next/image';
import { GiHamburgerMenu } from 'react-icons/gi';
import { BiChevronDown } from 'react-icons/bi';

const Navbar = () => {
  const router = useRouter();
  const id = router.query.id;
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [scrollY, setScrollY] = useState<number>(0);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [activeLink, setActiveLink] = useState<number | null>(null);

  const onMouseEnter = (linkId: number) => {
    setActiveLink(linkId);
  };

  const onMouseLeave = () => {
    setActiveLink(null);
  };

  const onSublinkClick = () => {
    setActiveLink(activeLink);
  };
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

  //   const options = { passive: true } as any;
  //   window.addEventListener('scroll', onScroll, options);

  //   return () => {
  //     window.removeEventListener('scroll', onScroll, options);
  //   };
  // }, []);

  return (
    <header
      className={`w-full  z-20 top-0 left-0 transition-all duration-200
    ${
      id || router.pathname === '/contact-us' || router.pathname === '/about-us'
        ? 'text-black '
        : 'text-white'
    } `}>
      <div className='py-8 md:py-24'>
        <div className='flex justify-between items-center center'>
          <Link href='/'>
            <Image
              src={
                id ||
                router.pathname === '/contact-us' ||
                router.pathname === '/about-us'
                  ? logodark
                  : logo
              }
              alt='Future Analytics Logo'
            />
          </Link>
          <button onClick={() => setIsOpen(!isOpen)}>
            <GiHamburgerMenu className='text-4xl text-white lg:hidden' />
          </button>

          <nav className='hidden lg:block relative'>
            <ul className='flex gap-12'>
              {navbarLinks.map((item) => {
                const { id, name, url, subLinks, target } = item;
                const isSublinksVisible = activeLink === id;

                return (
                  <li className='lowercase' key={id}>
                    <div
                      className='flex items-center gap-2'
                      onMouseEnter={() => onMouseEnter(id)}
                      onMouseLeave={onMouseLeave}>
                      <Link
                        href={url}
                        target={target}
                        rel='noreferrer'
                        className={
                          router.pathname === url
                            ? 'pb-2 border-b-2  border-b-[#709cef] text-[#7aa6f8]  text-sm'
                            : 'pb-3 hover:pb-2 hover:border-b-2  hover:border-b-[#709cef] hover:text-[#7aa6f8] duration-200 text-sm'
                        }>
                        {name}
                      </Link>
                      {name === 'services' ? (
                        <BiChevronDown className='text-3xl pb-3' />
                      ) : null}
                    </div>
                    {name === 'services' && isSublinksVisible && subLinks ? (
                      <div
                        className='absolute z-10 font-normal bg-blue-100 divide-y divide-gray-100 rounded-lg shadow w-fit'
                        onMouseEnter={() => onMouseEnter(id)}
                        onMouseLeave={onMouseLeave}>
                        <ul className='py-2 text-sm text-gray-700'>
                          {subLinks.map((data, index) => {
                            const { name, url } = data;
                            return (
                              <li key={index}>
                                <Link
                                  href={url}
                                  className='block px-4 py-2 hover:bg-[#00213A] hover:text-white text-black capitalize'
                                  onClick={onSublinkClick}>
                                  {name}
                                </Link>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    ) : null}
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
