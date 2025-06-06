import React, { useEffect, useState } from 'react';
import './Results.css';

const Results = () => {
  const [responses, setResponses] = useState([]);

  useEffect(() => {
    if (process.env.NODE_ENV === "production") {
        console.log("fetching")
      fetch("https://script.google.com/macros/s/AKfycbxwuHEPv73_ZX1aDkpJkwNTWniAKFtzzO5U1siJAqkvuflm2TUWd6ChUNu08yiEo5JlvQ/exec", {
        method: "GET"
      },
    console.log("done"))
        .then(response => response.json())
        .then(data => {
            console.log("Fetched data:", data);
            setResponses(data);
          })
        .catch(err => console.error("Failed to fetch responses:", err));
    } else {
      setResponses([
        {
            Experience: "peaceful",
            SparkInterest: "Yes, it made me think about going on a hike.",
            AddToSim: "More animal sounds and bugs.",
            FantasticalBenefit: "Yes",
          },
          {
            Experience: "breathtaking",
            SparkInterest: "Absolutely. It reminded me of camping.",
            AddToSim: "Better wind and sunlight effects.",
            FantasticalBenefit: "Yes",
          },
          {
            Experience: "eerie",
            SparkInterest: "Not quite, it felt off from real nature.",
            AddToSim: "Randomized animal movement.",
            FantasticalBenefit: "No",
          },
          {
            Experience: "unreal",
            SparkInterest: "A bit — it made me appreciate real air.",
            AddToSim: "Richer forest layers and depth.",
            FantasticalBenefit: "Yes",
          },
          {
            Experience: "serene",
            SparkInterest: "Yes. I want to walk in a real forest now.",
            AddToSim: "Bird flocks and more sound variation.",
            FantasticalBenefit: "Yes",
          },
          {
            Experience: "isolating",
            SparkInterest: "No — it felt synthetic.",
            AddToSim: "Dynamic weather and unpredictability.",
            FantasticalBenefit: "No",
          },
          {
            Experience: "calming",
            SparkInterest: "Yes, I could see using this for relaxation.",
            AddToSim: "More realistic sky transitions.",
            FantasticalBenefit: "Yes",
          },
        ]);
    }
  }, []);  
  const [wordIndex, setWordIndex] = useState(0);
  const [sparkIndex, setSparkIndex] = useState(0);
  const [addIndex, setAddIndex] = useState(0);

  const [visibleIndices, setVisibleIndices] = useState({
    word: 0,
    spark: 0,
    add: 0,
  });
  const [fadeStates, setFadeStates] = useState({
    word: 'fade-in',
    spark: 'fade-in',
    add: 'fade-in',
  });  

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex(prev => (prev + 1) % responses.length);
      setSparkIndex(prev => (prev + 1) % responses.length);
      setAddIndex(prev => (prev + 1) % responses.length);
    }, 4000); // rotate every 4 seconds
  
    return () => clearInterval(interval);
  }, [responses]);

  useEffect(() => {
    const interval = setInterval(() => {
      // Fade out
      setFadeStates({ word: 'fade-out', spark: 'fade-out', add: 'fade-out' });
  
      setTimeout(() => {
        // Update index
        setVisibleIndices(prev => ({
          word: (prev.word + 1) % responses.length,
          spark: (prev.spark + 1) % responses.length,
          add: (prev.add + 1) % responses.length,
        }));
  
        // Fade in
        setFadeStates({ word: 'fade-in', spark: 'fade-in', add: 'fade-in' });
      }, 800); // Match transition duration
    }, 4000);
  
    return () => clearInterval(interval);
  }, [responses]);  

  const words = responses
  .filter(r => r.Experience) // make sure it's not undefined/null
  .map(r => ({ text: r.Experience, value: 1 }));


  const rotatingAnswers = (field) => {
    return responses.map((r, i) => (
      <div key={i} className="rotating-text">{r[field]}</div>
    ));
  };

  const histogramData = responses.reduce((acc, r) => {
    const val = r.FantasticalBenefit;
    acc[val] = (acc[val] || 0) + 1;
    return acc;
  }, {});

  return (
    <div className="results-container">
     <section className="results-section">
  <h2>Word: VR Experience Description</h2>
  <div className="fade-box">
    <span className={`fade-text ${fadeStates.word}`}>
      {responses[visibleIndices.word]?.Experience}
    </span>
  </div>
</section>

<section className="results-section">
  <h2>Does VR Spark Interest in Nature?</h2>
  <div className="fade-box">
    <span className={`fade-text ${fadeStates.spark}`}>
      {responses[visibleIndices.spark]?.SparkInterest}
    </span>
  </div>
</section>

<section className="results-section">
  <h2>Suggestions to Make VR Nature More Real</h2>
  <div className="fade-box">
    <span className={`fade-text ${fadeStates.add}`}>
      {responses[visibleIndices.add]?.AddToSim}
    </span>
  </div>
</section>

<section className="results-section">
  <h2>Do Fantastical Simulations Help?</h2>
  <div className="histogram-box">
    {Object.entries(histogramData).map(([key, count]) => (
      <div key={key} className="bar-row">
        <span>{key}</span>
        <div
          className={`bar ${key.toLowerCase()}`}
          style={{ width: `${count * 30}px` }}
        >
          {count}
        </div>
      </div>
    ))}
  </div>
</section>
    </div>
  );
};

export default Results;