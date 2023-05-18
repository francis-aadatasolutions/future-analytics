import Navbar from 'src/HOC/Navigation';
import React, { useEffect, useState } from 'react';
import Hero from './hero';
import { motion, useAnimation } from 'framer-motion';

const HomePage = () => {
  const [showAnimation, setShowAnimation] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowAnimation(true);
    }, 3000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <motion.main
      className={`relative flex flex-col justify-center items-center overflow-hidden duration-500 ${
        showAnimation ? 'bg-dark-blue' : 'bg-secondary'
      } `}>
      <Navbar />
      <Hero />
      {showAnimation && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 1 } }}
          className='-right-96 absolute w-2/3  h-[1000px] rounded-full bg-secondary'></motion.div>
      )}
    </motion.main>
  );
};

export default HomePage;

// ${
//   showAnimation
//     ? ' bg-hero-main  bg-cover bg-no-repeat  w-full h-full'
//     : 'bg-hero-plain  bg-cover bg-no-repeat  w-full h-full'
// }`
