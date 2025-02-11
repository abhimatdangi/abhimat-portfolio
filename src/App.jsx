import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import VideoPortfolio from './pages/VideoPortfolio';
import Navigation from './components/Navigation';
import TechStack from './components/TechStack';
import Experience from './components/Experience';
import Projects from './components/Projects';
import MusicToggle from './components/MusicToggle';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/video-portfolio" element={<VideoPortfolio />} />
      </Routes>
    </Router>
  );
}

export default App; 