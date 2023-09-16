import React, { useState, useEffect } from "react";
import WorkoutItem from "./WorkoutItem";

function WorkoutList({ workouts, onDeleteWorkout, onSave }) {

  const [searchTerm, setSearchTerm] = useState('');

  const filteredWorkouts = workouts.filter((workout) => 
  workout.exercise.toLowerCase().includes(searchTerm.toLowerCase()))
  

  return (
    <div>
      <h1 id="workout-list-title">
         Workouts 
      </h1>
      <form id="search-workouts">
        <label>Search: </label>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </form>
    {filteredWorkouts.map((workout) => (
      <WorkoutItem
        key={workout.id}
        workout={workout}
        onDeleteWorkout={onDeleteWorkout}
        onSave={onSave}
      />
    ))}
    </div>
  )
}

export default WorkoutList;