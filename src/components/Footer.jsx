import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';  // Import social media icons from react-icons

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-sky-900 via-cyan-800 to-sky-800 text-white mt-12">
      <div className="footer p-10 container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-white">
        {/* WinterPay Section */}
        <div>
          <span className="footer-title text-xl font-bold">WinterPay</span>
          <p className="text-sm mt-2">Easy & Secure Utility Bill Payments<br />For a Chill Winter ❄️</p>
        </div>

        {/* Pages Section */}
        <div>
          <span className="footer-title text-xl font-bold">Pages</span>
          <div className="space-y-3 mt-2 flex flex-col md:flex-row md:gap-4">
            <NavLink 
              to="/" 
              className={({ isActive }) => 
                `text-lg ${isActive ? 'text-cyan-400 font-semibold' : 'hover:text-cyan-300'}`
              }
            >
              Home
            </NavLink>
            <NavLink 
              to="/bills" 
              className={({ isActive }) => 
                `text-lg ${isActive ? 'text-cyan-400 font-semibold' : 'hover:text-cyan-300'}`
              }
            >
              Bills
            </NavLink>
            <NavLink 
              to="/my-profile" 
              className={({ isActive }) => 
                `text-lg ${isActive ? 'text-cyan-400 font-semibold' : 'hover:text-cyan-300'}`
              }
            >
              Profile
            </NavLink>
          </div>
        </div>

        {/* Support Section */}
        <div>
          <span className="footer-title text-xl font-bold">Support</span>
          <div className="space-y-3 mt-2 flex flex-col md:flex-row md:gap-4">
            <NavLink 
              to="#" 
              className={({ isActive }) => 
                `text-lg ${isActive ? 'text-cyan-400 font-semibold' : 'hover:text-cyan-300'}`
              }
            >
              Help Center
            </NavLink>
            <NavLink 
              to="#" 
              className={({ isActive }) => 
                `text-lg ${isActive ? 'text-cyan-400 font-semibold' : 'hover:text-cyan-300'}`
              }
            >
              Privacy Policy
            </NavLink>
            <NavLink 
              to="#" 
              className={({ isActive }) => 
                `text-lg ${isActive ? 'text-cyan-400 font-semibold' : 'hover:text-cyan-300'}`
              }
            >
              Terms of Service
            </NavLink>
          </div>
        </div>
      </div>

      {/* Social Media Links */}
      <div className="flex justify-center space-x-6 py-4">
        <a 
          href="https://facebook.com" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="w-12 h-12 bg-blue-600 flex items-center justify-center text-white rounded-full hover:bg-blue-700 transition-all duration-300"
        >
          <FaFacebookF className="text-2xl" />
        </a>
        <a 
          href="https://twitter.com" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="w-12 h-12 bg-blue-400 flex items-center justify-center text-white rounded-full hover:bg-blue-500 transition-all duration-300"
        >
          <FaTwitter className="text-2xl" />
        </a>
        <a 
          href="https://linkedin.com" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="w-12 h-12 bg-blue-700 flex items-center justify-center text-white rounded-full hover:bg-blue-800 transition-all duration-300"
        >
          <FaLinkedinIn className="text-2xl" />
        </a>
        <a 
          href="https://instagram.com" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="w-12 h-12 bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 flex items-center justify-center text-white rounded-full hover:bg-gradient-to-r from-purple-700 via-pink-600 to-red-600 transition-all duration-300"
        >
          <FaInstagram className="text-2xl" />
        </a>
      </div>

      {/* Footer Bottom */}
      <div className="text-center text-sm py-4 border-t border-blue-800 bg-blue-950">
        © {new Date().getFullYear()} WinterPay. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
