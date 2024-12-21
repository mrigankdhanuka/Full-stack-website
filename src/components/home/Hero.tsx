import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative h-screen flex items-center">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
          Transform Your Digital Presence
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl">
          We create innovative digital solutions that help businesses grow and succeed in the modern world.
        </p>
        <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-lg flex items-center space-x-2 transition transform hover:scale-105">
          <span>Get Started</span>
          <ArrowRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default Hero;