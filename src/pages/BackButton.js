import React from 'react';
import { useNavigate } from 'react-router-dom';
import './BackButton.css';

const BackButton = ({ to = "/options", label = "← Back to Options" }) => {
  const navigate = useNavigate();
  return (
    <button className="back-button" onClick={() => navigate(to)}>
      {label}
    </button>
  );
};

export default BackButton;