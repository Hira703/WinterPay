import React, { useState, useEffect, useRef } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import logo from '../assets/logos/nav-logo.jpg';
import { FaUserCircle } from 'react-icons/fa';

const Navbar = () => {
  const { user, logOut, balance } = useAuth(); 
  const navigate = useNavigate();
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); 
  const dropdownRef = useRef(null); 

  const handleLogout = () => {
    logOut()
      .then(() => {
        alert("You Logged Out successfully");
        navigate('/login'); 
      })
      .catch((error) => console.log(error));
  };

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const isValidImage = (url) => {
    const img = new Image();
    img.src = url;
    return img.complete && img.naturalHeight !== 0;
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownVisible(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <nav className="bg-gradient-to-r from-sky-800 via-cyan-800 to-sky-900 text-white p-4 shadow-md">
      <div className="flex justify-between items-center max-w-screen-xl mx-auto">
        <div className="text-xl font-bold flex items-center gap-2">
          <NavLink to="/" className="flex items-center gap-2 hover:text-cyan-300">
            <img src={logo} alt="WinterPay Logo" className="h-10 w-10 rounded-full shadow-md" />
            <span>Winterpay</span>
          </NavLink>
        </div>

        {/* Desktop Menu */}
        <div className="space-x-4 hidden md:flex">
          <NavLink 
            to="/" 
            className={({ isActive }) => `px-3 py-2 rounded-md ${isActive ? 'text-cyan-400' : 'hover:text-cyan-200'}`}
          >
            Home
          </NavLink>
          <NavLink 
            to="/bills" 
            className={({ isActive }) => `px-3 py-2 rounded-md ${isActive ? 'text-cyan-400' : 'hover:text-cyan-200'}`}
          >
            Bills
          </NavLink>
          <NavLink 
            to="/my-profile" 
            className={({ isActive }) => `px-3 py-2 rounded-md ${isActive ? 'text-cyan-400' : 'hover:text-cyan-200'}`}
          >
            My Profile
          </NavLink>
          <NavLink 
            to="/about" 
            className={({ isActive }) => `px-3 py-2 rounded-md ${isActive ? 'text-cyan-400' : 'hover:text-cyan-200'}`}
          >
            About Us
          </NavLink>
        </div>

        {/* Mobile Hamburger Menu */}
        <div className="md:hidden flex items-center space-x-4">
          <button onClick={toggleMenu} className="text-white">
            {menuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"></path></svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"></path></svg>
            )}
          </button>
        </div>

        {/* Authenticated User Dropdown */}
        <div className="flex items-center space-x-4">
          {!user ? (
            <>
              <NavLink 
                to="/login" 
                className={({ isActive }) => `px-3 py-2 rounded-md ${isActive ? 'text-cyan-400' : 'hover:text-cyan-200'}`}
              >
                Login
              </NavLink>
              <NavLink 
                to="/register" 
                className={({ isActive }) => `px-3 py-2 rounded-md ${isActive ? 'text-cyan-400' : 'hover:text-cyan-200'}`}
              >
                Register
              </NavLink>
            </>
          ) : (
            <div className="relative" ref={dropdownRef}>
              <button 
                className="flex items-center space-x-2 hover:text-cyan-200 px-3 py-2 rounded-md"
                onClick={toggleDropdown}
              >
                {user.photoURL && isValidImage(user.photoURL) ? (
                  <img src={user.photoURL} alt="Profile" className="w-8 h-8 rounded-full" />
                ) : (
                  <FaUserCircle className="w-8 h-8 text-white" />
                )}
                <span>{user.displayName}</span>
              </button>

              {dropdownVisible && (
                <div className="absolute right-0 mt-2 w-48 bg-white text-black shadow-lg rounded-lg z-10">
                  <div className="p-4">
                    <p className="font-semibold">Balance: ৳{balance}</p>
                  </div>
                  <button 
                    onClick={handleLogout} 
                    className="block w-full text-left py-2 px-4 hover:bg-gray-100"
                  >
                    Log Out
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-gradient-to-r from-sky-800 via-cyan-800 to-sky-900 text-white p-4 space-y-4">
          <NavLink 
            to="/" 
            className={({ isActive }) => `block px-3 py-2 rounded-md ${isActive ? 'text-cyan-400' : 'hover:text-cyan-200'}`}
          >
            Home
          </NavLink>
          <NavLink 
            to="/bills" 
            className={({ isActive }) => `block px-3 py-2 rounded-md ${isActive ? 'text-cyan-400' : 'hover:text-cyan-200'}`}
          >
            Bills
          </NavLink>
          <NavLink 
            to="/my-profile" 
            className={({ isActive }) => `block px-3 py-2 rounded-md ${isActive ? 'text-cyan-400' : 'hover:text-cyan-200'}`}
          >
            My Profile
          </NavLink>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
