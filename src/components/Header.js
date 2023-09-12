import React from "react";
import { Link } from "react-router-dom"

function Header() {
  return (
    <header>
      <h1>MuscleMAX</h1>
      <nav className="nav-bar">
        <Link to="/" id="home-link">Home</Link>
        <Link to="/workouts" id="workouts-link">Workouts</Link>
        <Link to="/add-workout" id="add-workout-link">Add Workout</Link>
      </nav>
    </header>
  )
}

export default Header;