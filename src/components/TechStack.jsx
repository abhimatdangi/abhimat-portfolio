import React from 'react';

function TechStack() {
  const technologies = [
    { 
      name: 'React', 
      icon: '/react.png',
    },
    { 
      name: 'JavaScript', 
      icon: '/javascript.png',
    },
    { 
      name: 'HTML', 
      icon: '/html.png',
    },
    { 
      name: 'CSS', 
      icon: '/css.png',
    },
    { 
      name: 'After Effects', 
      icon: '/after-effects.png',
    },
    { 
      name: 'Premiere Pro', 
      icon: '/premiere-pro.png',
    },
    { 
      name: 'Figma', 
      icon: '/figma.png',
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