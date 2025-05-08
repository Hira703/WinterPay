import React, { useState, useEffect, useRef } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import logo from '../assets/logos/nav-logo.jpg';
import { FaUserCircle } from 'react-icons/fa';

const Navbar = () => {
  const { user, logOut, balance } = useAuth();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const handleLogout = () => {
    logOut()
      .then(() => {
        alert('You logged out successfully');
        setMenuOpen(false);
        navigate('/login');
      })
      .catch((error) => console.log(error));
  };

  const toggleMenu = () => setMenuOpen(!menuOpen);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <nav className="bg-gradient-to-r from-sky-800 via-cyan-800 to-sky-900 text-white p-4 shadow-md">
      <div className="flex justify-between items-center max-w-screen-xl mx-auto">
        {/* Logo on the left */}
        <NavLink to="/" className="text-xl font-bold flex items-center gap-2 hover:text-cyan-300">
          <img src={logo} alt="WinterPay Logo" className="h-10 w-10 rounded-full shadow-md" />
          <span className="hidden md:inline">Winterpay</span>
        </NavLink>

        {/* Hamburger on small devices */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white">
            {menuOpen ? (
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 items-center">
          <NavLink to="/" className={({ isActive }) => `px-3 py-2 ${isActive ? 'text-cyan-400' : 'hover:text-cyan-200'}`}>Home</NavLink>
          <NavLink to="/bills" className={({ isActive }) => `px-3 py-2 ${isActive ? 'text-cyan-400' : 'hover:text-cyan-200'}`}>Bills</NavLink>
          <NavLink to="/my-profile" className={({ isActive }) => `px-3 py-2 ${isActive ? 'text-cyan-400' : 'hover:text-cyan-200'}`}>My Profile</NavLink>
          <NavLink to="/about" className={({ isActive }) => `px-3 py-2 ${isActive ? 'text-cyan-400' : 'hover:text-cyan-200'}`}>About Us</NavLink>

          {!user ? (
            <>
              <NavLink to="/login" className={({ isActive }) => `px-3 ${isActive ? 'text-cyan-400' : 'hover:text-cyan-200'}`}>Login</NavLink>
              <NavLink to="/register" className={({ isActive }) => `px-3 ${isActive ? 'text-cyan-400' : 'hover:text-cyan-200'}`}>Register</NavLink>
            </>
          ) : (
            <div className="relative group">
              <button className="flex items-center space-x-2 hover:text-cyan-200">
                {user.photoURL ? (
                  <img src={user.photoURL} alt="Profile" className="w-8 h-8 rounded-full" />
                ) : (
                  <FaUserCircle className="w-8 h-8 text-white" />
                )}
                <span>{user.displayName}</span>
              </button>
              <div className="absolute right-0 mt-2 w-48 bg-white text-black shadow-lg rounded-lg hidden group-hover:block z-10">
                <div className="p-4">
                  <p className="font-semibold">Balance: ৳{balance}</p>
                </div>
                <button onClick={handleLogout} className="block w-full text-left py-2 px-4 hover:bg-gray-100">
                  Log Out
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div ref={menuRef} className="md:hidden mt-2 px-4 space-y-2">
          <NavLink to="/" onClick={() => setMenuOpen(false)} className="block py-2 border-b border-cyan-700 hover:text-cyan-300">Home</NavLink>
          <NavLink to="/bills" onClick={() => setMenuOpen(false)} className="block py-2 border-b border-cyan-700 hover:text-cyan-300">Bills</NavLink>
          <NavLink to="/my-profile" onClick={() => setMenuOpen(false)} className="block py-2 border-b border-cyan-700 hover:text-cyan-300">My Profile</NavLink>
          <NavLink to="/about" onClick={() => setMenuOpen(false)} className="block py-2 border-b border-cyan-700 hover:text-cyan-300">About Us</NavLink>

          {!user ? (
            <>
              <NavLink to="/login" onClick={() => setMenuOpen(false)} className="block py-2 border-b border-cyan-700 hover:text-cyan-300">Login</NavLink>
              <NavLink to="/register" onClick={() => setMenuOpen(false)} className="block py-2 border-b border-cyan-700 hover:text-cyan-300">Register</NavLink>
            </>
          ) : (
            <>
              <div className="py-2 border-b border-cyan-700 font-semibold">Balance: ৳{balance}</div>
              <button onClick={handleLogout} className="w-full text-left py-2 hover:text-cyan-300">Log Out</button>
            </>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
