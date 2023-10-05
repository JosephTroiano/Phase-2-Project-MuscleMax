import React, { useState } from "react";
import WorkoutItem from "./WorkoutItem";

function WorkoutList({ workouts, onDeleteWorkout, onSave, onToggleFavorite }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("none"); 
  const [showFavorites, setShowFavorites] = useState(false);
  

  function handleSortChange(event) {
    setSortBy(event.target.value);
  }

  const filteredWorkouts = workouts
    .filter((workout) =>
      workout.exercise.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .slice();

  if (sortBy === "lowToHigh") {
    filteredWorkouts.sort((workout1, workout2) =>
      workout1.weight - workout2.weight
    );
  } else if (sortBy === "highToLow") {
    filteredWorkouts.sort((workout1, workout2) =>
      workout2.weight - workout1.weight
    );
  }

  const displayedWorkouts = showFavorites
  ? filteredWorkouts.filter((workout) => workout.isFavorite)
  : filteredWorkouts;

 

  return (
    <div className="workout-cards">
      <h1 id="workout-list-title">Workouts</h1>
      <hr></hr>
      <form id="search-workouts">
        <label id="search-label">Search by name: </label>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <div>
          <label htmlFor="sort-dropdown">Sort by weight: </label>
          <select
            id="sort-dropdown"
            value={sortBy}
            onChange={handleSortChange}
          >
            <option value="none"></option>
            <option value="lowToHigh">Low → High</option>
            <option value="highToLow">High → Low</option>
          </select>
        </div>
        <div id="favorites-option">
          <label htmlFor="fav-checkbox">Show favorites only:</label>
          <input 
            id="fav-checkbox"
            type="checkbox"
            checked={showFavorites}
            onChange={() => setShowFavorites(!showFavorites)}
          />
        </div>
      </form>
    
      {displayedWorkouts.map((workout) => (
        <WorkoutItem
          key={workout.id}
          workout={workout}
          onDeleteWorkout={onDeleteWorkout}
          onSave={onSave}
          onToggleFavorite={onToggleFavorite}
        />
      ))}
    </div>
  );
}

export default WorkoutList;
