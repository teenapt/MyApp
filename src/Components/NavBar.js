import React from 'react';
import { ImNewspaper } from 'react-icons/im';
import { FaSearch } from 'react-icons/fa';
import './NavBar.css';

const NavBar = () => {
  return (
    <nav className="navbar bg-gradient-to-r from-blue-700 to-blue-900 text-white px-6 py-4 shadow-lg flex items-center justify-between rounded-lg">
      <a href="#" className="flex items-center space-x-3">
        <ImNewspaper className="text-4xl transition-transform transform hover:scale-110" />
        <span className="text-3xl font-extrabold tracking-tight">AcoNews</span>
      </a>
      <div className="relative flex-grow max-w-lg">
        <input
          type="text"
          placeholder="Search..."
          className="w-full p-3 pl-12 pr-16 border border-blue-500 rounded-full bg-blue-800 text-white placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
        />
        <FaSearch className="absolute right-4 top-1/2 transform -translate-y-1/2 text-blue-300 text-xl" />
      </div>
    </nav>
  );
};

export default NavBar;







