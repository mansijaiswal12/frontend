
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay } from 'swiper/modules';
import "../src/swiper.css"; // Ensure this path is correct
import img1 from "../src/assets/sliderone.webp";
// import img2 from "../assets/slidertwo.webp";
// import img3 from "../assets/sliderthree.webp";

const HomeSlider = () => {
  return (
    <div className=''>
      <Swiper 
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        autoplay={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide><img src={img1} /></SwiperSlide>
        <SwiperSlide><img src={img1} /></SwiperSlide>
        <SwiperSlide><img src={img1} /></SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HomeSlider;
