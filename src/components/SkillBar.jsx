import React from 'react';

function SkillBar({ name, duration, progress }) {
  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-2">
        <span className="text-lg font-medium">{name}</span>
        <span className="text-gray-400">{duration}</span>
      </div>
      <div className="w-full h-2 bg-gray-800 rounded-full">
        <div 
          className="h-full bg-white rounded-full" 
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
}

export default SkillBar; 