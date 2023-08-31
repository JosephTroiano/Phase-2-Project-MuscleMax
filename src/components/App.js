import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header';
import WorkoutList from './WorkoutList';
import AddWorkout from './AddWorkout';
import Home from './Home';
import Settings from './Settings';
import './App.css';

const App = () => {
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/workouts')
      .then(response => response.json())
      .then(data => setWorkouts(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="app">
      <Header />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/workouts"
            element={<WorkoutList workouts={workouts} setWorkouts={setWorkouts} />}
          />
          <Route path="/add-workout" element={<AddWorkout addWorkout={setWorkouts} />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
