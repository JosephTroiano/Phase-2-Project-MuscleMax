import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import WorkoutList from "./WorkoutList";
import AddWorkout from "./AddWorkout";



function App() {
  const [workouts, setWorkouts] = useState([]);
  

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


  function saveWorkout(editedWorkout) {
    const updatedWorkouts = workouts.map((workout) => {
      if (workout.id === editedWorkout.id) {
        return editedWorkout;
      } else {
        return workout;
      }
    })


    fetch(`http://localhost:3000/workouts/${editedWorkout.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(editedWorkout)
    })
    .then((r) => r.json())
    .then(() => {console.log("Success")})
    .catch((error) => {
      console.log(error)
    })
    setWorkouts(updatedWorkouts)
  }
  

  function deleteWorkout(deletedWorkout) {
    const updatedWorkouts = workouts.filter((workout) => 
    workout.id !== deletedWorkout.id);
    setWorkouts(updatedWorkouts);
    
    fetch(`http://localhost:3000/workouts/${deletedWorkout.id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(deletedWorkout)
    })
    .then((r) => r.json())
    .then(() => {console.log("Success")})
    .catch((error) => {
      console.log(error)
    });
    setWorkouts(updatedWorkouts)
  }



  function toggleFavorite(workoutId, isFavorite) {
    const updatedWorkouts = workouts.map((workout) => {
      if (workout.id === workoutId) {

        workout.isFavorite = isFavorite;
      }
      return workout;
    });

    fetch(`http://localhost:3000/workouts/${workoutId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ isFavorite }),
    })
    .then((r) => r.json())
    .then(() => {
      console.log("Success")
    })
    .catch((error) => {
      console.log(error)
    });

    setWorkouts(updatedWorkouts)
  }
  

  return (
   <div>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/workouts" element={
        <WorkoutList 
          workouts={workouts} 
          onDeleteWorkout={deleteWorkout} 
          onSave={saveWorkout}
          onToggleFavorite={toggleFavorite}
        />}
      />
      <Route path="/add-workout" element={<AddWorkout onAddWorkout={addWorkout} />} />
    </Routes>
   </div>
  )
}

export default App;