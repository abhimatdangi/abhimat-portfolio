import React from 'react';
import reactIcon from '../assets/react.png'
import javascriptIcon from '../assets/javascript.png'
import htmlIcon from '../assets/html.png'
import cssIcon from '../assets/css.png'
import aeIcon from '../assets/after-effects.png'
import prIcon from '../assets/premiere-pro.png'
import figmaIcon from '../assets/figma.png'

function TechStack() {
  const technologies = [
    { 
      name: 'React', 
      icon: reactIcon,
    },
    { 
      name: 'JavaScript', 
      icon: javascriptIcon,
    },
    { 
      name: 'HTML', 
      icon: htmlIcon,
    },
    { 
      name: 'CSS', 
      icon: cssIcon,
    },
    { 
      name: 'After Effects', 
      icon: aeIcon,
    },
    { 
      name: 'Premiere Pro', 
      icon: prIcon,
    },
    { 
      name: 'Figma', 
      icon: figmaIcon,
    },
  ];

  return (
    <div className="w-full overflow-hidden relative">
      {/* Gradient masks for feathered edges */}
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#0A0A0A] to-transparent z-10"></div>
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#0A0A0A] to-transparent z-10"></div>
      
      {/* Scrolling content */}
      <div className="relative w-full">
        <div className="flex gap-4 animate-slide whitespace-nowrap px-10">
          {technologies.map((tech) => (
            <div 
              key={tech.name}
              className="flex items-center gap-3 bg-[#111111] p-4 rounded-lg hover:bg-[#1a1a1a] transition-colors shrink-0"
            >
              <img 
                src={tech.icon} 
                alt={tech.name} 
                className="w-8 h-8 object-contain"
              />
              <span className="text-sm text-gray-300">{tech.name}</span>
            </div>
          ))}
          {/* Duplicate set for seamless loop */}
          {technologies.map((tech) => (
            <div 
              key={`${tech.name}-duplicate`}
              className="flex items-center gap-3 bg-[#111111] p-4 rounded-lg hover:bg-[#1a1a1a] transition-colors shrink-0"
            >
              <img 
                src={tech.icon} 
                alt={tech.name} 
                className="w-8 h-8 object-contain"
              />
              <span className="text-sm text-gray-300">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TechStack; 