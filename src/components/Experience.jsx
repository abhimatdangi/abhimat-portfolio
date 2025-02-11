import React from 'react';

function Experience() {
  const experiences = [
    {
      company: 'Video Editing',
      role: 'Freelancer',
      period: '2022 - Present',
      description: 'Creating and editing videos using Adobe After Effects and Premiere Pro.',
      skills: ['After Effects', 'Premiere Pro', 'Motion Graphics'],
      highlights: [
        'Created engaging video content for various clients',
        'Specialized in motion graphics and visual effects',
        'Handled multiple projects simultaneously'
      ]
    },
    {
      company: 'Web Development',
      role: 'Self-Learning',
      period: '2023 - Present',
      description: 'Building web applications and learning modern technologies.',
      skills: ['React', 'JavaScript', 'HTML/CSS'],
      highlights: [
        'Developed responsive web applications',
        'Implemented modern UI/UX designs',
        'Created interactive user interfaces'
      ]
    }
  ];

  return (
    <div className="space-y-12">
      {experiences.map((exp, index) => (
        <div 
          key={exp.company}
          className={`relative flex gap-8 items-start`}
        >
          {/* Number badge only - removed line */}
          <div className="relative flex flex-col items-center">
            <div className="w-8 h-8 bg-[#111111] border border-blue-500/20 rounded-full flex items-center justify-center text-blue-400 font-medium">
              {index + 1}
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 bg-[#111111] rounded-lg p-6 hover:bg-[#161616] transition-colors">
            {/* Header */}
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-bold text-white mb-1">{exp.company}</h3>
                <p className="text-blue-400 font-medium">{exp.role}</p>
              </div>
              <span className="text-sm text-gray-400 bg-[#0A0A0A] px-3 py-1 rounded-full">
                {exp.period}
              </span>
            </div>

            {/* Description */}
            <p className="text-gray-300 mb-4">{exp.description}</p>

            {/* Highlights */}
            <ul className="space-y-2 mb-4">
              {exp.highlights.map((highlight, i) => (
                <li key={i} className="flex items-center text-gray-400 text-sm">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2" />
                  {highlight}
                </li>
              ))}
            </ul>

            {/* Skills */}
            <div className="flex flex-wrap gap-2">
              {exp.skills.map(skill => (
                <span 
                  key={skill}
                  className="text-xs bg-[#0A0A0A] text-blue-400 px-3 py-1 rounded-full border border-blue-500/20"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Experience; 