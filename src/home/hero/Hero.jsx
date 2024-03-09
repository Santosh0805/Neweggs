import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

export default function Hero() {
  return (
    <>
    <div id= "manage">
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide><img src="https://promotions.newegg.com/rosewill/23-1909/1920x660.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://promotions.newegg.com/desktop/24-0111/1920x660_sm.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://promotions.newegg.com/intel/24-0099/1920x660_sm.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://promotions.newegg.com/nepro/22-1681/1920x660_sm.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://promotions.newegg.com/nepro/24-0215/1920x660.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://promotions.newegg.com/Playstation/24-0193/1920x660.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://promotions.newegg.com/gigabyte/24-0170/1920x660_sm.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://promotions.newegg.com/nepro/24-0132/banner/1920x660_sm.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://promotions.newegg.com/samsung/23-1556/1920x660_sm.png" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://promotions.newegg.com/nepro/23-1540/1920x660_sm.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://promotions.newegg.com/microsoft/24-0071/1920x660_sm.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://promotions.newegg.com/amd/24-0084/1920x660_sm.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://promotions.newegg.com/nepro/24-0040/banner/1920x660_sm.jpg" alt="" /></SwiperSlide>
      </Swiper>
    </div>
    </>
  );
}
