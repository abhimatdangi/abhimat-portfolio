import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navigation() {
  const location = useLocation();
  
  // Don't render navigation on video portfolio page
  if (location.pathname === '/video-portfolio') {
    return null;
  }

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-8 left-1/2 -translate-x-1/2 z-50">
      <div className="bg-[#111111]/90 backdrop-blur-sm border border-gray-800 rounded-full px-8 py-4">
        <div className="flex items-center gap-12 font-instrument text-white">
          <button 
            onClick={() => scrollToSection('home')}
            className="text-base hover:text-blue-400 transition-colors"
          >
            Home
          </button>
          <button 
            onClick={() => scrollToSection('tech-stack')}
            className="text-base hover:text-blue-400 transition-colors"
          >
            Tech Stack
          </button>
          <button 
            onClick={() => scrollToSection('experience')}
            className="text-base hover:text-blue-400 transition-colors"
          >
            Experience
          </button>
          <button 
            onClick={() => scrollToSection('projects')}
            className="text-base hover:text-blue-400 transition-colors"
          >
            Projects
          </button>
          <Link 
            to="/video-portfolio" 
            className="text-base hover:text-blue-400 transition-colors"
          >
            Video Portfolio
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navigation; 