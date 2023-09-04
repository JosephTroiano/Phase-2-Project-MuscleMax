import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
        <h1>
            MuscleMax
        </h1>
      <nav className="main-nav-bar">
            <Link to="/" id="home-link">Home</Link>
            <Link to="/workouts" id="workouts-link">Workouts</Link>
            <Link to="/add-workout" id="add-workout-link">Add Workout</Link>
            <Link to="/settings" id="settings-link">Settings</Link>
      </nav>
    </header>
  );
};

export default Header;
