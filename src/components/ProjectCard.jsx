import React from 'react';

function ProjectCard({ title, description, url }) {
  return (
    <a 
      href={url} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="block bg-[#1a1a1a] p-6 rounded-lg hover:bg-[#222] transition-colors"
    >
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </a>
  );
}

export default ProjectCard; 