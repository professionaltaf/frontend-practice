import React from 'react';

function Footer() {
  return (
    <footer className="bg-emerald-400 text-white p-6">
      <div className="container mx-auto flex flex-wrap justify-between items-center">
        {/* Brand Section */}
        <div className="flex items-center gap-3">
          <img
            src="./src/assets/icon.png"
            alt="Logo"
            className="h-10 object-cover max-w-12 max-h-14"
          />
          <span className="text-lg font-bold font-display">Youtube</span>
        </div>

        {/* Links Section */}
        <div className="flex flex-wrap gap-6 mt-4 md:mt-0">
          <a href="#" className="hover:underline">
            About Us
          </a>
          <a href="#" className="hover:underline">
            Contact
          </a>
          <a href="#" className="hover:underline">
            Privacy Policy
          </a>
          <a href="#" className="hover:underline">
            Terms of Service
          </a>
        </div>

        {/* Social Media Icons */}
        <div className="flex gap-4 mt-4 md:mt-0">
          <a href="#" className="text-gray-300 hover:text-white">
            <i className="fa-brands fa-facebook-f"></i>
          </a>
          <a href="#" className="text-gray-300 hover:text-white">
            <i className="fa-brands fa-twitter"></i>
          </a>
          <a href="#" className="text-gray-300 hover:text-white">
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a href="#" className="text-gray-300 hover:text-white">
            <i className="fa-brands fa-youtube"></i>
          </a>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="text-center text-sm mt-6 border-t border-gray-300 pt-4">
        © 2024 Youtube Altaf Raza. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;
