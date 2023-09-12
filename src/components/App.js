import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import WorkoutList from "./WorkoutList";
import AddWorkout from "./AddWorkout";



function App() {
  const [workouts, setWorkouts] = useState([])

  useEffect(() => {
    fetch(`http://localhost:3000/workouts`)
    .then((r) => r.json())
    .then((data) => {
      setWorkouts(data)
    })
    .catch((error) => {
      console.log(error)
    });
  }, []); 
  
  function addWorkout(newWorkout) {
    setWorkouts([...workouts, newWorkout])
  } 
  

  return (
   <div>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/workouts" element={<WorkoutList workouts={workouts} />} />
      <Route path="/add-workout" element={<AddWorkout onAddWorkout={addWorkout} />} />
    </Routes>
   </div>
  )
}

export default App;