import React, { useState } from "react";

function Home() {
  
  const [showHomeMessage, setShowHomeMessage] = useState(true);
  const [showSignUpForm, setShowSignUpForm] = useState(false);
  const [showLogInForm, setShowLogInForm] = useState(false);

  function handleSignUpClick() {
    setShowSignUpForm(true)
    setShowLogInForm(false)
    setShowHomeMessage(false)
  }

  function handleLogInClick() {
    setShowLogInForm(true)
    setShowSignUpForm(false)
    setShowHomeMessage(false)
  }

  function handleGoBackClick() {
    setShowHomeMessage(true)
    setShowLogInForm(false)
    setShowSignUpForm(false)
    
  }


  return (
    <div id="home-page">
      {showHomeMessage && (
        <div id="home-page-message">
          <h1>Welcome to the MuscleMax App!</h1>
          <p>Your personal companion for tracking your weightlifting 
        workouts and improving your fitness journey.
          </p>
          <button id="sign-up-button" onClick={handleSignUpClick}>Sign up</button>
          <button id="log-in-button" onClick={handleLogInClick}>Log in</button>
       </div>
      )}
      {showSignUpForm && (
        <div id="sign-up-form">
          <h2>Sign up here: </h2>
          <label>Username: </label>
          <input type="text" />
          <br></br>
          <label>Email: </label>
          <input type="email" />
          <br></br>
          <label>Passowrd: </label>
          <input type="password" />
          <br></br>
          <button id="go-back-button" onClick={handleGoBackClick}>← Go back</button>
          <button id="sign-up!-button">Sign up →</button>
        </div>
      )}
      {showLogInForm && (
        <div id="log-in-form">
          <h2>Log in now: </h2>
          <label>Username: </label>
          <input type="text" />
          <br></br>
          <label>Passowrd: </label>
          <input type="password" />
          <br></br>
          <button id="go-back-button" onClick={handleGoBackClick}>← Go back</button>
          <button>Log in →</button>
        </div>
      )}
    </div>
  )
}

export default Home;