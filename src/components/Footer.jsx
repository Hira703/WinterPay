import React from 'react';

const Footer = () => {
    return (
      <footer className="bg-blue-950 text-white mt-12">
        <div className="footer p-10 container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-white">
          <div>
            <span className="footer-title">WinterPay</span>
            <p>Easy & Secure Utility Bill Payments<br />For a Chill Winter ❄️</p>
          </div>
          <div>
            <span className="footer-title">Pages</span>
            <a className="link link-hover" href="/">Home</a>
            <a className="link link-hover" href="/bills">Bills</a>
            <a className="link link-hover" href="/my-profile">Profile</a>
          </div>
          <div>
            <span className="footer-title">Support</span>
            <a className="link link-hover" href="#">Help Center</a>
            <a className="link link-hover" href="#">Privacy Policy</a>
            <a className="link link-hover" href="#">Terms of Service</a>
          </div>
        </div>
        <div className="text-center text-sm py-4 border-t border-blue-800 bg-blue-900">
          © {new Date().getFullYear()} WinterPay. All rights reserved.
        </div>
      </footer>
    );
  };
  
  export default Footer;
  
