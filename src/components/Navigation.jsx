import React from 'react';

function Navigation() {
  return (
    <nav className="fixed top-8 left-1/2 -translate-x-1/2 z-50">
      <div className="bg-[#111111]/90 backdrop-blur-sm border border-gray-800 rounded-full px-8 py-4">
        <div className="flex items-center gap-12 font-instrument">
          <a 
            href="#about" 
            className="text-base hover:text-blue-400 transition-colors"
          >
            About
          </a>
          <a 
            href="#tech" 
            className="text-base hover:text-blue-400 transition-colors"
          >
            Tech Stack
          </a>
          <a 
            href="#experience" 
            className="text-base hover:text-blue-400 transition-colors"
          >
            Experience
          </a>
          <a 
            href="#projects" 
            className="text-base hover:text-blue-400 transition-colors"
          >
            Projects
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navigation; 