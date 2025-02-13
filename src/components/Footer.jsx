// src/components/Footer.jsx
import React from 'react';
import { FaStethoscope } from "react-icons/fa6";

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Column 1: Logo and Description */}
        <div>
          <div className="flex items-center text-2xl font-bold text-primary">
            <FaStethoscope />
            <h2 className="text-2xl font-bold text-primary">Clinic</h2>
          </div>
          <p className="mt-4 text-gray-400">
            Your trusted healthcare partner providing quality care.
          </p>
        </div>
        {/* Column 2: Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="#hero" className="text-gray-400 hover:text-white">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="text-gray-400 hover:text-white">
                About
              </a>
            </li>
            <li>
              <a href="#clinics" className="text-gray-400 hover:text-white">
              Clinics
              </a>
            </li>
            <li>
              <a href="#doctors" className="text-gray-400 hover:text-white">
              Doctors
              </a>
            </li>
          </ul>
        </div>
        {/* Column 3: Social Networks */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                Facebook
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                Twitter
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                Instagram
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
        {/* Column 4: Contact Info */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact Info</h3>
          <ul className="space-y-2 text-gray-400">
            <li>123 Clinic Street, City, Country</li>
            <li>Email: info@clinic.com</li>
            <li>Phone: (123) 456-7890</li>
          </ul>
        </div>
      </div>
      <div className="mt-8 text-center text-gray-500">
        © 2025 Clinic. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
