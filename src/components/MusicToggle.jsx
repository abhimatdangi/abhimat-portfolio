import React, { useState, useRef, useEffect } from 'react';

function MusicToggle() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    audioRef.current = new Audio('/background-music.m4a');
    audioRef.current.loop = true;
    audioRef.current.volume = 0.4;

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
      }
    };
  }, []);

  const toggleMusic = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch(error => {
          console.error("Play failed:", error);
        });
      }
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-4">
      <div className="text-right opacity-50 pr-4">
        <p className="text-sm">If Kendrick Lamar made Lofi Hip-Hop</p>
        <p className="text-xs">Kendrick Lamar</p>
      </div>

      <button 
        onClick={toggleMusic}
        className="fixed bottom-8 right-8 z-50 text-white hover:text-blue-400 transition-colors"
        aria-label={isPlaying ? 'Pause music' : 'Play music'}
      >
        {isPlaying ? (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 15.536L2.404 2.404C2.404 2.404 2.404 2.404 2.404 2.404M21.596 21.596L8.464 8.464" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464L2.404 21.596C2.404 21.596 2.404 21.596 2.404 21.596M21.596 2.404L8.464 15.536" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
          </svg>
        )}
      </button>
    </div>
  );
}

export default MusicToggle; 