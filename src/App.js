import React from 'react';
//import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Dialogue from './pages/Dialogue'
import Options from './pages/Options';
import Lakeside from './pages/Lakeside';
import Mountainside from './pages/Mountainside';
import DeathValley from './pages/DeathValley';
import ForestClearing from './pages/ForestClearing';
import ForestNight from './pages/ForestNight';
import Mystical from './pages/Mystical';

import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/dialogue" element={<Dialogue />} />
            <Route path="/options" element={<Options />} />
            <Route path="/beach" element={<Lakeside />} />
            <Route path="/mountainside" element={<Mountainside />} />
            <Route path="/deathvalley" element={<DeathValley />} />
            <Route path="/forestclearing" element={<ForestClearing />} />
            <Route path="/forestnight" element={<ForestNight />} />
            <Route path="/mystical" element={<Mystical />} /> 
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;