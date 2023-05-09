import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper';
import dashboard from '../../assets/images/Dashboard.png';
import sliderimage2 from '../../assets/sliderimage2.jpg';
import sliderimage3 from '../../assets/sliderimage3.jpg';
import Image from 'next/image';

const Slider = () => {
  return (
    <>
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
          <Image src={dashboard} alt='Dashboard' />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={sliderimage2} alt='Slider Image 2' className='h-48' />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={sliderimage3} alt='Slider Image 3' className='h-48' />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Slider;
