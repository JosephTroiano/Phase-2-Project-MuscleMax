import React from 'react';
import WorkoutItem from './WorkoutItem';

const WorkoutList = ({ workouts, setWorkouts }) => {
  const handleEdit = editedWorkout => {
    const updatedWorkouts = workouts.map(workout =>
      workout.id === editedWorkout.id ? editedWorkout : workout
    );
    setWorkouts(updatedWorkouts);
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
      {workouts.map(workout => (
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
