import React from 'react';

const WorkoutItem = ({ workout }) => {
  return (
    <div className="workout-item">
      <h3>{workout.name}</h3>
      <p>Weight: {workout.weight} lbs</p>
      <p>Sets: {workout.sets}</p>
      <p>Reps: {workout.reps}</p>
    </div>
  );
};

export default WorkoutItem;
