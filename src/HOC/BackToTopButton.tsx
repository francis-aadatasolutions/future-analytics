import React, { useEffect, useState } from 'react';
import { IoIosArrowUp } from 'react-icons/io';

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const handleScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const shouldShowButton = scrollTop > 300;

    setIsVisible(shouldShowButton);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <button
      className={`${
        isVisible ? 'fixed bottom-4 right-4' : 'hidden'
      } bg-primary hover:bg-dark-blue text-white p-4 rounded`}
      onClick={scrollToTop}>
      <IoIosArrowUp className='text-2xl' />
    </button>
  );
};

export default BackToTopButton;
