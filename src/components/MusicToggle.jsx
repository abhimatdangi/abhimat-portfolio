import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

function MusicToggle() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [audioLoaded, setAudioLoaded] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    try {
      const audio = new Audio('/abhimat-portfolio/background-music.m4a');
      audio.addEventListener('canplaythrough', () => {
        console.log('Audio loaded successfully');
        setAudioLoaded(true);
      });
      audio.addEventListener('error', (e) => {
        console.error('Audio loading error:', e);
      });
      audio.loop = true;
      audio.volume = 0.4;
      audioRef.current = audio;

      return () => {
        if (audioRef.current) {
          audioRef.current.pause();
          audioRef.current.remove();
        }
      };
    } catch (error) {
      console.error('Audio initialization error:', error);
    }
  }, []);

  const toggleMusic = async () => {
    if (!audioRef.current || !audioLoaded) {
      console.error("Audio not ready");
      return;
    }

    try {
      if (isPlaying) {
        await audioRef.current.pause();
        console.log("Music paused");
      } else {
        const playPromise = audioRef.current.play();
        if (playPromise !== undefined) {
          await playPromise;
          console.log("Music playing");
        }
      }
      setIsPlaying(!isPlaying);
    } catch (error) {
      console.error("Music playback error:", error);
    }
  };

  return (
    <motion.div 
      className="fixed bottom-6 right-6 z-50"
      initial={{ opacity: 0, filter: "blur(10px)" }}
      animate={{ opacity: 1, filter: "blur(0px)" }}
      transition={{ duration: 0.8, delay: 0.4 }}
    >
      <div className="flex items-center gap-4 bg-[#111111]/90 backdrop-blur-sm rounded-full p-4">
        <div className="text-right text-white mr-4">
          <p className="text-sm whitespace-nowrap">If Kendrick Lamar made Lofi Hip-Hop</p>
          <p className="text-xs text-gray-400">Kendrick Lamar</p>
        </div>

        <button 
          onClick={toggleMusic}
          className="bg-[#1a1a1a] p-3 rounded-full hover:bg-blue-500/10 transition-all duration-300 text-white hover:text-blue-400"
          aria-label={isPlaying ? 'Pause music' : 'Play music'}
          disabled={!audioLoaded}
        >
          {isPlaying ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          )}
        </button>
      </div>
    </motion.div>
  );
}

export default MusicToggle; 