import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';

import desco from '../assets/logos/desco.png';
import banglalink from '../assets/logos/Banglalink.png';
import metlife from '../assets/logos/MetLife.png';
import cable from '../assets/logos/cable.jpg';
import grameen from '../assets/logos/grameenphone.png';
import wasa from '../assets/logos/wasa.jpeg';

const Slider = () => {
  const logos = [desco, banglalink, metlife, cable, grameen, wasa];

  return (
    <div className="my-6 px-4">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={20}
        slidesPerView={3}
        loop={true}
        autoplay={{ delay: 1000, disableOnInteraction: false }}
        speed={600}
        breakpoints={{
          640: { slidesPerView: 3 },
          768: { slidesPerView: 4 },
          1024: { slidesPerView: 6 },
        }}
      >
        {logos.map((logo, index) => (
          <SwiperSlide key={index}>
            <img
              src={logo}
              alt={`logo-${index}`}
              className="w-24 h-24 object-contain mx-auto"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
