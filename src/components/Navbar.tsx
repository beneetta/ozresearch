import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
 
const Navbar: React.FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
 
  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
 
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);
 
  return (
    <div className="w-full bg-[#063558] py-4 px-8 flex items-center justify-between shadow-md">
      {/* Left: Logo and Name */}
      <div className="flex items-center">
        <img
          src="/logo-removebg-preview.png"
          alt="OzResearch Portal Logo"
          className="w-12 h-auto mr-3"
        />
        <h1 className="text-white text-xl font-semibold tracking-widest">
          OZRESEARCH PORTAL
        </h1>
      </div>
 
      {/* Right: Navigation */}
      <div className="flex items-center space-x-8">
        <nav className="flex space-x-8">
          <Link to="/" className="text-white hover:text-gray-300 transition-colors">Home</Link>
          <Link to="/about" className="text-white hover:text-gray-300 transition-colors">About</Link>
          <Link to="/contact" className="text-white hover:text-gray-300 transition-colors">Contact</Link>
        </nav>
 
        {/* Dropdown Menu */}
        <div className="relative" ref={dropdownRef}>
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="text-white hover:text-gray-300 transition-colors flex items-center"
          >
            Dashboards ▾
          </button>
          {isDropdownOpen && (
            <div className="absolute right-0 bg-white text-black mt-2 py-2 w-48 rounded shadow-lg z-50">
              <Link
                to="/author/dashboard"
                className="block px-4 py-2 hover:bg-gray-100 whitespace-nowrap"
                onClick={() => setIsDropdownOpen(false)}
              >
                Author Dashboard
              </Link>
              <Link
                to="/reviewer/dashboard"
                className="block px-4 py-2 hover:bg-gray-100 whitespace-nowrap"
                onClick={() => setIsDropdownOpen(false)}
              >
                Reviewer Dashboard
              </Link>
              <Link
                to="/editor/dashboard"
                className="block px-4 py-2 hover:bg-gray-100 whitespace-nowrap"
                onClick={() => setIsDropdownOpen(false)}
              >
                Editor Dashboard
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
 
export default Navbar;