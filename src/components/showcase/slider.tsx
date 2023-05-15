import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper';
import { motion } from 'framer-motion';
import dashboard from '../../assets/images/Dashboard.png';
import sliderimage2 from '../../assets/sliderimage2.jpg';
import sliderimage3 from '../../assets/sliderimage3.jpg';
import Image from 'next/image';
import { showVariants } from 'src/utils/framer';

const Slider = () => {
  return (
    <motion.div
      variants={showVariants}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, amount: 0.5 }}
      className='center'>
      <Swiper
        cssMode={true}
        slidesPerView={1}
        spaceBetween={30}
        navigation={true}
        mousewheel={true}
        pagination={{
          clickable: true,
        }}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className='mySwiper relative'>
        <SwiperSlide>
          <iframe
            title='Report Section'
            className='w-full'
            height='373.5'
            src='https://app.powerbi.com/view?r=eyJrIjoiOTMzYjJmYmUtZTMxNC00OGJmLTgyODAtZDkwYzFlYmQ0ZTliIiwidCI6IjE1NzkwYjE2LTljYTUtNGJmMi1iZDY2LTgyY2Y3ZmYzMjUwNyJ9'
            frameBorder='0'
            allowFullScreen={true}></iframe>
        </SwiperSlide>
        <SwiperSlide>
          <Image src={sliderimage2} alt='Slider Image 2' className='h-48' />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={sliderimage3} alt='Slider Image 3' className='h-48' />
        </SwiperSlide>
      </Swiper>
    </motion.div>
  );
};

export default Slider;
