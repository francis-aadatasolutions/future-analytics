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

  const onScroll = useCallback(
    (event: any) => {
      const { pageYOffset, scrollY } = window;
      if (pageYOffset > 590) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      setScrollY(window.pageYOffset);
    },
    [scrollY]
  );

  useEffect(() => {
    //add eventlistener to window
    const options = { passive: true } as any;
    window.addEventListener('scroll', onScroll, options);
    // remove event on unmount to prevent a memory leak with the cleanup
    return () => {
      window.removeEventListener('scroll', onScroll, options);
    };
  }, []);

  return (
    <header
      className={`w-full fixed py-4  z-20 top-0 left-0 transition-all duration-200
    ${
      isScrolled || id || router.pathname === '/contact-us'
        ? 'gradient-nav'
        : 'bg-transparent'
    } `}>
      <div className=''>
        <div className='flex justify-between center'>
          <Link href='/'>
            <Image src={logo} alt='Future Analytics Logo' />
          </Link>
          <button onClick={() => setIsOpen(!isOpen)}>
            <GiHamburgerMenu className='text-4xl text-white md:hidden' />
          </button>
          <nav className='hidden md:block'>
            <ul className='flex gap-12'>
              {navbarLinks.map((item) => {
                const { id, name, url } = item;
                return (
                  <li className='uppercase text-white' key={id}>
                    <Link href={url}>{name}</Link>
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

    // <nav
    //   className={
    //     id || router.pathname === '/contact-us'
    //       ? 'fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600'
    //       : 'bg-primary fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600'
    //   }>
    //   <div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4'>
    //     <div>
    //       <Link href='/'>
    //         {id || router.asPath === '/contact-us' ? (
    //           <Image src={logodark} alt='Future Analytics Logo' />
    //         ) : (
    //           <Image src={logo} alt='Future Analytics Logo' />
    //         )}
    //       </Link>
    //     </div>
    //     <div className='flex md:order-2'>
    //       <button
    //         onClick={() => setIsOpen(!isOpen)}
    //         data-collapse-toggle='navbar-sticky'
    //         type='button'
    //         className='inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-white '
    //         aria-controls='navbar-sticky'
    //         aria-expanded='false'>
    //         <span className='sr-only'>Open main menu</span>
    //         <GiHamburgerMenu className='text-white text-2xl' />
    //       </button>
    //     </div>
    //     {isOpen && (
    //       <div className='items-center justify-between w-full'>
    //         {/* <ul className='flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white d'>
    //         <li>
    //           <a
    //             href='#'
    //             className='block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500'
    //             aria-current='page'>
    //             Home
    //           </a>
    //         </li>
    //         <li>
    //           <a
    //             href='#'
    //             className='block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'>
    //             About
    //           </a>
    //         </li>
    //         <li>
    //           <a
    //             href='#'
    //             className='block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'>
    //             Services
    //           </a>
    //         </li>
    //         <li>
    //           <a
    //             href='#'
    //             className='block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'>
    //             Contact
    //           </a>
    //         </li>
    //       </ul> */}

    //         <ul className='flex flex-col md:flex-row w-full h-full justify-end items-center gap-12'>
    //           {navbarLinks.map((item) => {
    //             const { id, name, url } = item;
    //             return (
    //               <li className='uppercase' key={id}>
    //                 <Link href={url}>{name}</Link>
    //               </li>
    //             );
    //           })}
    //         </ul>
    //       </div>
    //     )}
    //   </div>
    // </nav>

    // <header className='w-full z-10 px-24 py-4 flex flex-row justify-between items-center text-black'>
    //   {/* className={
    //     id || router.pathname === '/contact-us'
    //       ? 'fixed top-0 max-w-screen w-full z-10 px-24 py-4 flex flex-row justify-between items-center text-black'
    //       : 'fixed top-0 max-w-screen w-full z-10 px-24 py-4 flex flex-row justify-between items-center text-white'
    //   }> */}
    //   <div>
    //     <Link href='/'>
    //       {id || router.asPath === '/contact-us' ? (
    //         <Image src={logodark} alt='Future Analytics Logo' />
    //       ) : (
    //         <Image src={logo} alt='Future Analytics Logo' />
    //       )}
    //     </Link>
    //   </div>
    //   <GiHamburgerMenu className='text-4xl md:hidden' />
    //   <nav className='hidden'>
    //     <ul className='flex flex-col md:flex-row w-full h-full justify-end items-center gap-12'>
    //       {navbarLinks.map((item) => {
    //         const { id, name, url } = item;
    //         return (
    //           <li className='uppercase' key={id}>
    //             <Link href={url}>{name}</Link>
    //           </li>
    //         );
    //       })}
    //     </ul>
    //   </nav>
    // </header>
  );
};

export default Navbar;
