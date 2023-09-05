import React, { useState } from "react";

function SignupForm({ onFormSubmit }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [submittedName, setSubmittedName] = useState(""); 

  const handleSubmit = (e) => {
    e.preventDefault();

    
    setSubmittedName(name);

   
    setFormSubmitted(true);

    onFormSubmit();
  };


  if (formSubmitted) {
    return (
      <div>
        <h2>Welcome, {submittedName}!</h2>
      </div>
    );
  }

  return (
    <div id="sign-up-form">
      <h2>Sign up now!</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            id="name"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <input
            type="email"
            id="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <input
            type="password"
            id="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div>
          <button type="submit">Sign Up</button>
        </div>
      </form>
    </div>
  );
}

export default SignupForm;
