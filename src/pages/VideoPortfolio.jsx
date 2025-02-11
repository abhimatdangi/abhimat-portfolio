import React from 'react';
import { Link } from 'react-router-dom';

function VideoPortfolio() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white p-6">
      <nav className="mb-8">
        <Link 
          to="/" 
          className="text-blue-400 hover:text-blue-500 transition-colors"
        >
          ← Back to Home
        </Link>
      </nav>
      
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 font-instrument">Video Portfolio</h1>
        
        {/* Embedded Wix Portfolio */}
        <div className="relative w-full pt-[56.25%] rounded-lg overflow-hidden">
          <iframe
            src="https://abhimatdangi.wixstudio.com/videoediting"
            className="absolute top-0 left-0 w-full h-full border-0"
            title="Video Portfolio"
            allowFullScreen
          />
        </div>

        {/* Optional: Add a direct link below the iframe */}
        <div className="mt-6 text-center">
          <a
            href="https://abhimatdangi.wixstudio.com/videoediting"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-500 transition-colors"
          >
            Open portfolio in new tab →
          </a>
        </div>
      </div>
    </div>
  );
}

export default VideoPortfolio; 