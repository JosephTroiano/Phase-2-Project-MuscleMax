import React, { useState, useEffect } from "react";
import WorkoutItem from "./WorkoutItem";

function WorkoutList({ workouts, onDeleteWorkout, onSave }) {

  const [searchTerm, setSearchTerm] = useState('');
  const [sortByWeight, setSortByWeight] = useState(false)

  const filteredWorkouts = workouts
    .filter((workout) => 
      workout.exercise.toLowerCase().includes(searchTerm.toLowerCase()))
    .slice();

  if (sortByWeight) {
    filteredWorkouts.sort((workout1, workout2) => 
    workout1.weight - workout2.weight);
  }

  function handleSortByWeightChange() {
    setSortByWeight((sortByWeight) => !sortByWeight)
  }
  

  return (
    <div>
      <h1 id="workout-list-title">
         Workouts 
      </h1>
      <form id="search-workouts">
        <label id="search-label">Search: </label>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <label id="sort-label">Sort by Weight?</label>
        <input
          id="sort-checkbox"
          type="checkbox"
          checked={sortByWeight}
          onChange={handleSortByWeightChange}
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