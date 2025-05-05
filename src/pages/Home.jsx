import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';

// Importing the logos locally
import banglalink from '../assets/logos/Banglalink.png';
import brac from '../assets/logos/brac.png';
import cable from '../assets/logos/cable.jpg';
import titas from '../assets/logos/titas.png';
import desco from '../assets/logos/desco.png';
import metlife from '../assets/logos/MetLife.png';
import wasa from '../assets/logos/wasa.jpeg';
import grameen from '../assets/logos/grameenphone.png'; // Assuming the full path is provided for Grameen

// Logos array
const logos = [
  desco,
  titas,
  banglalink,
  wasa,
  metlife,
  brac,
  grameen,
  cable
];

const Home = () => {
  return (
    <div>
      <section className="py-16 bg-gray-100">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-10">
            Our Trusted Partners
          </h2>

          <Swiper
            modules={[Autoplay]}
            spaceBetween={30}
            slidesPerView={3}
            breakpoints={{
              640: { slidesPerView: 4 },
              768: { slidesPerView: 5 },
              1024: { slidesPerView: 6 },
            }}
            autoplay={{ delay: 2500 }}
            loop
          >
            {logos.map((logo, index) => (
              <SwiperSlide key={index}>
                <div className="relative w-24 h-24 md:w-32 md:h-32 mx-auto p-4 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out">
                  <img
                    src={logo}
                    alt={`logo-${index}`}
                    className="w-full h-full object-contain"
                  />
                  <div className="absolute inset-0 bg-black opacity-0 hover:opacity-25 rounded-xl transition-opacity duration-300"></div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </div>
  );
};

export default Home;
