import React, { useState } from "react";

function Home() {
  
  const [showHomeMessage, setShowHomeMessage] = useState(true);
  const [showSignUpForm, setShowSignUpForm] = useState(false);
  const [showLogInForm, setShowLogInForm] = useState(false);
  const [showSignedUpMessage, setShowSignedUpMessage] = useState(false)
  const [showLoggedInMessage, setShowLoggedInMessage] = useState(false)

  const [signUpName, setSignUpName] = useState('');
  const [signUpEmail, setSignUpEmail] = useState('');
  const [signUpPassword, setSignUpPassword] = useState('');
 
  const [logInName, setLogInName] = useState('');
  const [logInPassword, setLogInPassword] = useState('');

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

  function handleSignedUpClick() {
    setShowSignedUpMessage(true)
    setShowHomeMessage(false)
    setShowSignUpForm(false)
    setShowLogInForm(false)
    setShowLoggedInMessage(false)
  }

  function handleLoggedInClick() {
    setShowLoggedInMessage(true)
    setShowSignedUpMessage(false)
    setShowHomeMessage(false)
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
          <input 
          type="text"
          value={signUpName}
          onChange={(e) => setSignUpName(e.target.value)} />
          <br></br>
          <label>Email: </label>
          <input 
          type="email"
          value={signUpEmail}
          onChange={(e) => setSignUpEmail(e.target.value)} />
          <br></br>
          <label>Password: </label>
          <input 
          type="password"
          value={signUpPassword}
          onChange={(e) => setSignUpPassword(e.target.value)} />
          <br></br>
          <button id="go-back-button" onClick={handleGoBackClick}>← Go back</button>
          <button id="sign-up→-button" onClick={handleSignedUpClick}>Sign up →</button>
        </div>
      )}
      {showLogInForm && (
        <div id="log-in-form">
          <h2>Log in now: </h2>
          <label>Username: </label>
          <input 
          type="text"
          value={logInName}
          onChange={(e) => setLogInName(e.target.value)} />
          <br></br>
          <label>Password: </label>
          <input 
          type="password"
          value={logInPassword}
          onChange={(e) => setLogInPassword(e.target.value)} />
          <br></br>
          <button id="go-back-button" onClick={handleGoBackClick}>← Go back</button>
          <button onClick={handleLoggedInClick}>Log in →</button>
        </div>
      )}
      {showSignedUpMessage && (
        <div id="signed-up-message">
          <h1>Welcome, {signUpName}!</h1>
        </div>
      )}
      {showLoggedInMessage && (
        <div id="logged-in-message">
          <h1>Welcome back , {logInName}!</h1>
        </div>
      )}
    </div>
  )
}

export default Home;