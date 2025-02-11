import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import VideoPortfolio from './pages/VideoPortfolio';
import Navigation from './components/Navigation';
import MusicToggle from './components/MusicToggle';

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/video-portfolio" element={<VideoPortfolio />} />
      </Routes>
      <MusicToggle />
    </Router>
  );
}

export default App; 