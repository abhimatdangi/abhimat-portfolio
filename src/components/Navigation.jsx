import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

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
    <motion.nav 
      className="fixed top-8 left-1/2 -translate-x-1/2 z-50"
      initial={{ opacity: 0, filter: "blur(10px)" }}
      animate={{ opacity: 1, filter: "blur(0px)" }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      <div className="bg-[#111111]/90 backdrop-blur-sm border border-gray-800 rounded-full px-8 py-4">
        <div className="flex items-center gap-12 text-white">
          <button 
            onClick={() => scrollToSection('home')}
            className="text-base hover:text-blue-400 transition-colors relative group"
          >
            <span>Home</span>
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 transition-all group-hover:w-full"></span>
          </button>
          <button 
            onClick={() => scrollToSection('tech-stack')}
            className="text-base hover:text-blue-400 transition-colors relative group"
          >
            <span>Tech Stack</span>
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 transition-all group-hover:w-full"></span>
          </button>
          <button 
            onClick={() => scrollToSection('experience')}
            className="text-base hover:text-blue-400 transition-colors relative group"
          >
            <span>Experience</span>
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 transition-all group-hover:w-full"></span>
          </button>
          <button 
            onClick={() => scrollToSection('projects')}
            className="text-base hover:text-blue-400 transition-colors relative group"
          >
            <span>Projects</span>
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 transition-all group-hover:w-full"></span>
          </button>
        </div>
      </div>
    </motion.nav>
  );
}

export default Navigation; 