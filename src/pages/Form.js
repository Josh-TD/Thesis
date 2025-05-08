import React, { useState } from 'react';
import './Form.css';

const Form = () => {
  const [formData, setFormData] = useState({
    experience: '',
    sparkInterest: '',
    addToSim: '',
    fantasticalBenefit: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch("YOUR_WEB_APP_URL_HERE", {
        method: "POST",
        mode: "no-cors", // avoid CORS error for Google Sheets
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
  
      alert("Response submitted! Thank you.");
      setFormData({
        experience: '',
        sparkInterest: '',
        addToSim: '',
        fantasticalBenefit: '',
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("There was a problem submitting your response.");
    }
  };
  

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="form-box">
        <h2>VR and Nature Survey</h2>

        <label>
          1) In one word, how would you describe your experience in VR nature?
          <input type="text" name="experience" value={formData.experience} onChange={handleChange} required />
        </label>

        <label>
          2) Do you think simulated real-world nature can spark interest in real-world nature?
          <textarea name="sparkInterest" value={formData.sparkInterest} onChange={handleChange} required />
        </label>

        <label>
          3) What would you want added to simulated nature to make it more reflective of real-life nature?
          <textarea name="addToSim" value={formData.addToSim} onChange={handleChange} required />
        </label>

        <label>
          4) Do you think exploring fantastical (unreflective of reality) mediums in simulation benefits mending our relationship with nature?
          <select name="fantasticalBenefit" value={formData.fantasticalBenefit} onChange={handleChange} required>
            <option value="">Select</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </label>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;