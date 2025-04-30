import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Options.css';

import Beach from '../assets/Lakeside.png';
import Mountainside from '../assets/Mountainside.png';
import Deathvalley from '../assets/DeathValley.png';
import ForestClearing from '../assets/ForestClearing.png';
import ForestNight from '../assets/ForestNight.png';
import Mystical from '../assets/Mystical.png';

const imageButtons = [
  { label: "Beach", img: Beach, route: "/beach" },
  { label: "Mountainside", img: Mountainside, route: "/mountainside" },
  { label: "Death Valley", img: Deathvalley, route: "/deathvalley" },
  { label: "Forest Clearing", img: ForestClearing, route: "/forestclearing" },
  { label: "Forest Night", img: ForestNight, route: "/forestnight" },
  { label: "Mystical", img: Mystical, route: "/mystical" }
];

const Options = () => {
  const navigate = useNavigate();

  return (
    <div className="options-container">
      {imageButtons.map(({ label, img, route }, idx) => (
        <button
          key={idx}
          className="option-button"
          style={{ backgroundImage: `url(${img})` }}
          onClick={() => navigate(route)}
        >
          <span className="button-text">{label}</span>
        </button>
      ))}
    </div>
  );
};

export default Options;