import React from 'react';
import { Link } from 'react-router-dom';

function Projects() {
  const projects = [
    {
      title: "Video Portfolio",
      description: "Collection of video editing projects and showreels",
      path: "/video-portfolio",
      tags: ["After Effects", "Premiere Pro"]
    }
  ];

  return (
    <div className="grid grid-cols-1 gap-8">
      {projects.map((project) => (
        <Link
          key={project.title}
          to={project.path}
          className="group block"
        >
          <div className="bg-[#111111] rounded-lg overflow-hidden hover:bg-[#161616] transition-all duration-300 transform hover:-translate-y-1">
            <div className="p-6 pb-4">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-5 w-5 text-gray-400 group-hover:text-blue-400 transform group-hover:translate-x-1 transition-all" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
              <p className="text-gray-400 mb-4">{project.description}</p>
            </div>

            <div className="px-6 py-4 border-t border-gray-800 bg-[#0A0A0A]/50">
              <div className="flex flex-wrap gap-2">
                {project.tags.map(tag => (
                  <span 
                    key={tag} 
                    className="text-xs bg-[#0A0A0A] text-blue-400 px-3 py-1 rounded-full border border-blue-500/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default Projects; 