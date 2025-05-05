import React from 'react';
import banner from '../assets/logos/BannerImg.png'; // Make sure this path is correct

const Hero = () => {
  return (
    <div className="hero min-h-screen bg-gradient-to-r from-sky-800 via-cyan-800 to-sky-900 text-white rounded-lg">
      <div className="hero-content flex-col lg:flex-row">
        <img
          src={banner}
          alt="Winter Utility Banner"
          className="max-w-md w-full rounded-lg shadow-2xl"
        />
        <div className="lg:ml-12 mt-8 lg:mt-0 text-center lg:text-left">
          <h1 className="text-5xl font-extrabold mb-4 leading-tight">
            Pay Winter Utility Bills <br className="hidden md:block" /> Easily & Securely
          </h1>
          <p className="py-4 text-lg">
            Stay warm and stress-free this season. Manage your electricity, gas, and water bills in one place—quick, safe, and hassle-free.
          </p>
          <button className="btn bg-cyan-400 text-white hover:bg-cyan-500 mt-4">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
