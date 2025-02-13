// src/components/Navbar.jsx
import React, { useState, useContext } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logout } = useContext(AuthContext);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  const CustomLink = ({ to, children }) => {
    if (location.pathname === '/') {
      return (
        <ScrollLink
          to={to}
          smooth={true}
          duration={500}
          className="cursor-pointer text-primary hover:text-[#117068]"
          onClick={() => { if (isOpen) toggleMenu(); }}
        >
          {children}
        </ScrollLink>
      );
    } else {
      return (
        <RouterLink
          to={`/#${to}`}
          className="cursor-pointer text-primary hover:text-[#117068]"
          onClick={() => { if (isOpen) toggleMenu(); }}
        >
          {children}
        </RouterLink>
      );
    }
  };

  const Logo = () => {
    if (location.pathname === '/') {
      return (
        <ScrollLink
          to="hero"
          smooth={true}
          duration={500}
          className="text-xl font-bold text-primary cursor-pointer"
        >
          Clinic
        </ScrollLink>
      );
    } else {
      return (
        <RouterLink to="/" className="text-xl font-bold text-primary">
          Clinic
        </RouterLink>
      );
    }
  };

  return (
    <nav className="fixed top-1 left-1/2 -translate-x-1/2 w-11/12 rounded-2xl bg-white bg-opacity-30 backdrop-blur-sm shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <Logo />
        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 items-center">
          <li><CustomLink to="hero">Home</CustomLink></li>
          <li><CustomLink to="about">About</CustomLink></li>
          <li><CustomLink to="clinics">Clinics</CustomLink></li>
          <li><CustomLink to="doctors">Doctors</CustomLink></li>
          <li>
            {user ? (
              <button
                onClick={logout}
                className="bg-primary text-white px-4 py-2 rounded-full hover:bg-[#117068]"
              >
                Log Out
              </button>
            ) : (
              <RouterLink
                to="/signin"
                className="bg-primary text-white px-4 py-2 rounded-full hover:bg-[#117068]"
              >
                Sign In
              </RouterLink>
            )}
          </li>
        </ul>
        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            {isOpen ? (
              <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
              </svg>
            )}
          </button>
        </div>
      </div>
      {/* Mobile Menu bg-white bg-opacity-90 backdrop-blur-sm rounded-3xl my-4*/}
      {isOpen && (
        <div className="md:hidden">
          <ul className="flex flex-col items-center space-y-4 py-4">
            <li><CustomLink to="hero">Home</CustomLink></li>
            <li><CustomLink to="about">About</CustomLink></li>
            <li><CustomLink to="clinics">Clinics</CustomLink></li>
            <li><CustomLink to="doctors">Doctors</CustomLink></li>
            <li>
              {user ? (
                <button
                  onClick={() => { if (isOpen) toggleMenu(); logout(); }}
                  className="bg-primary text-white px-4 py-2 rounded hover:bg-[#117068]"
                >
                  Log Out
                </button>
              ) : (
                <RouterLink
                  to="/signin"
                  className="bg-primary text-white px-4 py-2 rounded hover:bg-[#117068]"
                  onClick={() => { if (isOpen) toggleMenu(); }}
                >
                  Sign In
                </RouterLink>
              )}
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
