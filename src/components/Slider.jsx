import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Import the Swiper styles
import 'swiper/css/pagination'; // Import pagination styles
import 'swiper/css/navigation'; // Import navigation styles
import { Pagination } from 'swiper/modules';

const Slider = () => {
  const [slides, setSlides] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch the data from the JSON file
    fetch('/sliderData.json')
      .then((response) => response.json()) // Parse the response as JSON
      .then((data) => {
        setSlides(data); // Set the fetched data into the state
        setLoading(false); // Set loading to false after data is fetched
      })
      .catch((err) => {
        setError("Failed to load slider data");
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="text-center p-6">Loading...</div>; // Show loading text while fetching data
  }

  if (error) {
    return <div className="text-center text-red-500 p-6">{error}</div>; // Show error message if data fetching fails
  }

  return (
    <div className="my-12">
      <h2 className="text-3xl font-bold text-center text-blue-900 mb-6">WinterPay Highlights</h2>

      <Swiper
        spaceBetween={20} // Space between each slide
        slidesPerView={1} // One slide at a time on mobile
        breakpoints={{
          640: {
            slidesPerView: 2, // Two slides on medium screens
          },
          768: {
            slidesPerView: 3, // Three slides on large screens
          },
          1024: {
            slidesPerView: 4, // Four slides on extra-large screens
          },
        }}
        loop={true} // Infinite loop
        autoplay={{
          delay: 2500, // Automatic slide transition interval
          disableOnInteraction: false, // Slide continues when interacting
        }}
        pagination={{
          clickable: true, // Enable clickable pagination
          el: '.swiper-pagination', // Custom pagination element
        }}
        modules={[Pagination]} // Include the Pagination module
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all transform hover:scale-105">
              <img
                src={slide.imageUrl}
                alt={slide.title || 'Slide Image'}
                className="w-full h-36 object-cover rounded-md mb-4 border-4 border-white"
                onError={(e) => e.target.src = '/images/fallback.jpg'} // Fallback image if the src is broken
              />
              <h3 className="text-xl font-semibold text-center text-blue-900 mb-2">{slide.title}</h3>
              <p className="text-center text-gray-700">{slide.description}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Adjust pagination dots position */}
      <div className="swiper-pagination m-4 text-center"></div> {/* Add margin to move dots down */}
    </div>
  );
};

export default Slider;
