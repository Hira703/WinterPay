import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const CustomSlider = () => {
  const [slides, setSlides] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('/sliderData.json')
      .then((response) => response.json())
      .then((data) => {
        setSlides(data);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to load slider data");
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="text-center py-6 text-gray-600">Loading...</div>;
  if (error) return <div className="text-center text-red-500 py-6">{error}</div>;

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className="my-20 px-4 md:px-12">
      <h2 className="text-4xl  text-center font-extrabold text-blue-900 mb-12">
        WinterPay Highlights
      </h2>

      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="px-4">
            <div className="bg-white/90 backdrop-blur-lg p-6 rounded-2xl shadow-lg hover:shadow-2xl border border-gray-200 transition-all duration-300 ease-in-out h-[450px] flex flex-col justify-between">
              <div className="w-full h-[200px] overflow-hidden rounded-xl mb-5">
                <img
                  src={slide.imageUrl}
                  alt={slide.title || 'Slide Image'}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  onError={(e) => (e.target.src = '/images/fallback.jpg')}
                />
              </div>
              <div className="flex-1 flex flex-col justify-between">
                <h3 className="text-xl font-semibold text-gray-800 mb-2 text-center">
                  {slide.title}
                </h3>
                <p className="text-gray-600 text-center text-sm leading-relaxed">
                  {slide.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CustomSlider;
