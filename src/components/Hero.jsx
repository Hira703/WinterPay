import React from 'react';
import banner from '../assets/logos/Banner.jpg'; // Use your own winter-themed banner

const Hero = () => {
  console.log(banner)  // Log to see if the image path is correct

  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url(${banner})`,  // Fixed the typo here
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="hero-overlay bg-opacity-100"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-xl">
            <h1 className="mb-5 text-4xl md:text-5xl font-bold">
              Stay Warm. Stay Connected.
            </h1>
            <p className="mb-5 text-lg">
              Pay all your winter utility bills—Electricity, Gas, Water, Internet & more—easily and securely from the comfort of your home.
            </p>
            <button className="btn btn-primary">
              Login to Pay Your Bills
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
