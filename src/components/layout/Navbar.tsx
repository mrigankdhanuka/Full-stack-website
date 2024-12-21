import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold text-indigo-600">Company</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-indigo-600 transition">Home</Link>
            <Link to="/about" className="text-gray-700 hover:text-indigo-600 transition">About</Link>
            <Link to="/services" className="text-gray-700 hover:text-indigo-600 transition">Services</Link>
            <Link to="/blog" className="text-gray-700 hover:text-indigo-600 transition">Blog</Link>
            <Link to="/contact" className="text-gray-700 hover:text-indigo-600 transition">Contact</Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-indigo-600 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="block px-3 py-2 text-gray-700 hover:text-indigo-600">Home</Link>
            <Link to="/about" className="block px-3 py-2 text-gray-700 hover:text-indigo-600">About</Link>
            <Link to="/services" className="block px-3 py-2 text-gray-700 hover:text-indigo-600">Services</Link>
            <Link to="/blog" className="block px-3 py-2 text-gray-700 hover:text-indigo-600">Blog</Link>
            <Link to="/contact" className="block px-3 py-2 text-gray-700 hover:text-indigo-600">Contact</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;