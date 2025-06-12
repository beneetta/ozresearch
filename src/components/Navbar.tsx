import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
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
      <nav className="flex space-x-8">
        <Link to="/" className="text-white hover:text-gray-300 transition-colors">Home</Link>
        <Link to="/about" className="text-white hover:text-gray-300 transition-colors">About</Link>
        <Link to="/contact" className="text-white hover:text-gray-300 transition-colors">Contact</Link>
      </nav>

      {/* Dropdown Menu */}
  <div className="group relative">
    <button className="text-white hover:text-gray-300 transition-colors">
      Dashboards ▾
    </button>
    <div className="absolute hidden group-hover:block bg-white text-black mt-2 py-2 w-48 rounded shadow-md z-50">
      <Link to="/author/dashboard" className="block px-4 py-2 hover:bg-gray-100">Author Dashboard</Link>
      <Link to="/reviewer/dashboard" className="block px-4 py-2 hover:bg-gray-100">Reviewer Dashboard</Link>
      <Link to="/editor/dashboard" className="block px-4 py-2 hover:bg-gray-100">Editor Dashboard</Link>
    </div>
  </div>
    </div>
  );
};

export default Navbar;
