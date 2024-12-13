'use client';

import Link from 'next/link';
import { useState } from 'react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle the menu visibility
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="bg-black text-white px-6 py-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Left Side - Logo with Soft Net Image */}
        <div className="flex items-center space-x-2">
          <img 
            src="/images/img4.png" // Update with the correct path to your logo image
            alt="Soft Net"
            className="h-8"  // Adjust the size of the logo
          />
          <div className="text-xl font-bold">DEEP NET SOFT</div>
        </div>

        {/* Mobile Hamburger Icon */}
        <div className="block lg:hidden">
          <button onClick={toggleMenu} className="text-white">
            <i className="fas fa-bars"></i>
          </button>
        </div>

        {/* Right Side - Navigation Links */}
        <ul
          className={`lg:flex space-x-6 absolute lg:relative lg:space-x-6 lg:block ${
            isMenuOpen ? 'top-16 left-0 w-full bg-black' : 'hidden'
          } lg:top-auto lg:left-auto lg:w-auto lg:bg-transparent lg:space-x-6`}
        >
          <li>
            <Link
              href="/"
              className="block px-4 py-2 text-center hover:text-blue-400 transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/menu"
              className="block px-4 py-2 text-center hover:text-blue-400 transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Menu
            </Link>
          </li>
          <li>
            <Link
              href="/reservation"
              className="block px-4 py-2 text-center hover:text-blue-400 transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Make a Reservation
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="block px-4 py-2 text-center hover:text-blue-400 transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
