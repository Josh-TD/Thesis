import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="forest-hero" onClick={() => navigate('/options')}>
      <div className="hero-text">Explore the modern wilderness</div>
    </div>
  );
};

export default Home;
