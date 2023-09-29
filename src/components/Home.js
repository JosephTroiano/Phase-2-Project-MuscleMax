import React, { useState } from "react";

function Home() {
  const [view, setView] = useState("home");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignedUp, setIsSignedUp] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [formError, setFormError] = useState("");

  function handleButtonClick(newView) {
    setView(newView);
    setIsSignedUp(false); 
    setIsLoggedIn(false); 
    setFormError(""); 
  };

  function handleFormSubmit(e) {
    e.preventDefault();
    
    
    if (view === "sign-up" && (!name || !email || !password)) {
      setFormError("**PLEASE FILL OUT ALL FIELDS**");
      return;
    } else if (view === "log-in" && (!name || !password)) {
      setFormError("**PLEASE FILL OUT ALL FIELDS**");
      return;
    }

    setFormError("");

    if (view === "sign-up") {
      setIsSignedUp(true); 
    } else if (view === "log-in") {
      setIsLoggedIn(true); 
    }
  };

  return (
    <div id="home-page">
      {view === "home" && (
        <div id="home-page-message">
          <h1>Welcome to the MuscleMAX App!</h1>
          <p>Your personal companion for tracking your weightlifting workouts and improving your fitness journey.</p>
          <button id="sign-up-button" onClick={() => handleButtonClick("sign-up")}>Sign up</button>
          <button id="log-in-button" onClick={() => handleButtonClick("log-in")}>Log in</button>
        </div>
      )}
      {(view === "sign-up" || view === "log-in") && !isSignedUp && !isLoggedIn && (
        <div id={`${view}-form`}>
          <h2>{view === "sign-up" ? "Sign up here:" : "Log in now:"}</h2>
          <form onSubmit={handleFormSubmit}>
            <label>Username:</label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            <br />
            {view === "sign-up" && (
              <>
                <label>Email:</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <br />
              </>
            )}
            <label>Password:</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <br />
            <button id="go-back-button" onClick={() => handleButtonClick("home")}>← Go back</button>
            <button type="submit">{view === "sign-up" ? "Sign up →" : "Log in →"}</button>
            {formError && <p className="error">{formError}</p>}
          </form>
        </div>
      )}
      {isSignedUp && (
        <div id="signed-up-message">
          <h1>Welcome, {name}!</h1>
        </div>
      )}
      {isLoggedIn && (
        <div id="logged-in-message">
          <h1>Welcome back, {name}!</h1>
        </div>
      )}
    </div>
  );
}

export default Home;
