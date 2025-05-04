import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const { user, logOut } = useAuth();
  const navigate = useNavigate();
  const [dropdownVisible, setDropdownVisible] = useState(false);
//   const dropdownRef = useRef(null);  // Reference to the dropdown menu

  const balance = 10000;

  const handleLogout = () => {
    logOut()
      .then(() => {
        alert("You Logged Out successfully");
      })
      .catch((error) => {
        console.log(error);
      });
 // Assuming logout clears user session
    navigate('/login');  // Redirect to login page after logging out
  };

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
    console.log("clicked")
  };

  // Close dropdown if clicked outside
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//         setDropdownVisible(false);
//       }
//     };

//     document.addEventListener('click', handleClickOutside);

//     return () => {
//       document.removeEventListener('click', handleClickOutside);
//     };
//   }, []);

  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="flex justify-between items-center max-w-screen-xl mx-auto">
        <div className="text-xl font-bold">
          <Link to="/">MyLogo</Link>
        </div>

        <div className="space-x-4 hidden md:flex">
          <Link to="/bills" className="hover:bg-gray-700 px-3 py-2 rounded-md">Bills</Link>
          <Link to="/my-profile" className="hover:bg-gray-700 px-3 py-2 rounded-md">My Profile</Link>
        </div>

        <div className="flex items-center space-x-4">
          {!user ? (
            <>
              <Link to="/login" className="hover:bg-gray-700 px-3 py-2 rounded-md">Login</Link>
              <Link to="/register" className="hover:bg-gray-700 px-3 py-2 rounded-md">Register</Link>
            </>
          ) : (
            <div className="relative">
              {/* Profile Button */}
              <button 
                className="btn flex items-center space-x-2 hover:bg-gray-700 px-3 py-2 rounded-md"
                onClick={toggleDropdown} // Toggle the dropdown visibility on click
              >
                <img src={user.photoURL} alt="Profile" className="w-8 h-8 rounded-full" />
                <span>{user.displayName}</span>
              </button>

              {/* Dropdown Menu */}
              {dropdownVisible && (
                <div 
                //   ref={dropdownRef} 
                  className="absolute right-0 mt-2 w-48 bg-white text-black shadow-lg rounded-lg z-10"
                >
                  <div className="p-4">
                    <p className="font-semibold">Balance: ৳{balance}</p>
                  </div>
                  <Link 
                    to="/login" 
                    className="block py-2 px-4 hover:bg-gray-100 cursor-pointer"
                    onClick={handleLogout}  // Logout on clicking
                  >
                    Log Out
                  </Link>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
