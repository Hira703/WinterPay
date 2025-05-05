import React from 'react';

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
          <div className="space-y-3 mt-2">
            <a className="link link-hover hover:text-cyan-300 font-bold" href="/">Home</a>
            <a className="link link-hover hover:text-cyan-300 font-bold" href="/bills">Bills</a>
            <a className="link link-hover hover:text-cyan-300 font-bold" href="/my-profile">Profile</a>
          </div>
        </div>

        {/* Support Section */}
        <div>
          <span className="footer-title text-xl font-bold">Support</span>
          <div className="space-y-3 mt-2">
            <a className="link link-hover hover:text-cyan-300 font-bold" href="#">Help Center</a>
            <a className="link link-hover hover:text-cyan-300 font-bold" href="#">Privacy Policy</a>
            <a className="link link-hover hover:text-cyan-300 font-bold" href="#">Terms of Service</a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center text-sm py-4 border-t border-blue-800 bg-blue-950">
        © {new Date().getFullYear()} WinterPay. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
