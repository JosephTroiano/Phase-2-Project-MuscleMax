import React, { useState } from 'react';
import WorkoutItem from './WorkoutItem';

const WorkoutList = ({ workouts, setWorkouts }) => {
  const [search, setSearch] = useState('');
  const [displayedWorkouts, setDisplayedWorkouts] = useState(workouts);

  console.log(search)
  const handleEdit = editedWorkout => {
    const updatedWorkouts = workouts.map(workout =>
      workout.id === editedWorkout.id ? editedWorkout : workout
    );
    setWorkouts(updatedWorkouts);
  };

  const handleInputChange = e => {
    const searchTerm = e.target.value;
    setSearch(searchTerm);
  
    const filteredWorkouts = workouts.filter(workout => {
      if (searchTerm === "") {
        return true; 
      }
      
      if (workout.exercise) {
        return workout.exercise.toLowerCase().includes(searchTerm.toLowerCase());
      }
      return false; 
    });
  
    
    setDisplayedWorkouts(filteredWorkouts);
  };
  
  const handleDelete = workoutId => {
    const updatedWorkouts = workouts.filter(workout => workout.id !== workoutId);
    setWorkouts(updatedWorkouts);

    
    fetch(`http://localhost:3000/workouts/${workoutId}`, {
      method: 'DELETE',
    })
      .then(response => response.json())
      .catch(error => console.error('Error deleting workout:', error));
  };

  return (
    <div className="workout-list">
      <h2 id="workouts-title">Workouts</h2>
      <label>Search:</label>
      <input 
      id="search-workouts"
      type="text"
      value={search}
      placeholder="e.g. Squat"
      onChange={handleInputChange}
      />
      
      {displayedWorkouts.map(workout => (
        <WorkoutItem
          key={workout.id}
          workout={workout}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      ))}
    </div>
    
  );
  
};


export default WorkoutList;
