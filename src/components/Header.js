import React from "react";
import { Link } from "react-router-dom"

function Header() {
  return (
    <header>
      <h1>MuscleMAX</h1>
      <nav className="nav-bar">
        <Link to="/" className="nav-link">‒ Home ‒</Link>
        <Link to="/workouts" className="nav-link">‒ Workouts ‒</Link>
        <Link to="/add-workout" className="nav-link">‒ Add Workout ‒</Link>
      </nav>
    </header>
  )
}

export default Header;