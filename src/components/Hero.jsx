import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import banner from '../assets/logos/BannerImg.png';

const Hero = () => {
  const navigate = useNavigate();
  const { user } = useAuth();

  const handleGetStarted = () => {
    navigate(user ? '/' : '/login');
  };

  return (
    <div className="hero min-h-screen bg-gradient-to-r from-sky-800 via-cyan-800 to-sky-900 text-white rounded-lg">
      <div className="hero-content flex-col lg:flex-row">
        <img
          src={banner}
          alt="WinterPay utility banner"
          className="max-w-md w-full rounded-lg shadow-2xl"
        />
        <div className="lg:ml-12 mt-8 lg:mt-0 text-center lg:text-left">
          <h1 className="text-5xl font-extrabold mb-4 leading-tight">
            Pay Winter Utility Bills <br className="hidden md:block" /> Easily & Securely
          </h1>
          <p className="py-4 text-lg text-white/90">
            Stay warm and stress-free this season. Manage your electricity, gas, and water bills in one place—quick, safe, and hassle-free.
          </p>
          <button
            onClick={handleGetStarted}
            className="px-6 py-3 rounded-full bg-cyan-400 text-white text-lg font-semibold shadow-md hover:bg-cyan-500 hover:scale-105 transition-all duration-300"
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
