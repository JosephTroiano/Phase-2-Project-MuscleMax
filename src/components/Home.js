import React, { useState } from 'react';
import SignupForm from './SignupForm';

const Home = () => {
  const [showSignupForm, setShowSignupForm] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false); // Track form submission

  const toggleSignupForm = () => {
    setShowSignupForm(!showSignupForm);

    // Reset formSubmitted state when cancel is clicked
    if (formSubmitted) {
      setFormSubmitted(false);
    }
  };

  const handleFormSubmit = () => {
    // Set formSubmitted state to true when the form is submitted
    setFormSubmitted(true);
  };

  return (
    <div className="home">
      {showSignupForm ? (
        <div className="signup-form-container">
          <SignupForm onFormSubmit={handleFormSubmit} />
          {formSubmitted ? null : (
            <button className="demo-buttons" onClick={toggleSignupForm}>
              Cancel
            </button>
          )}
        </div>
      ) : (
        <div className="home-content">
          <h2>Welcome to the MuscleMax App!</h2>
          <p>Your personal companion for tracking weightlifting workouts and improving your fitness journey.</p>
          <div className="cta-buttons">
            <button className="demo-buttons" onClick={toggleSignupForm}>
              Sign Up
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
