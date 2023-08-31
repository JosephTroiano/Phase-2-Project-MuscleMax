import React from 'react';
import WorkoutItem from './WorkoutItem';

const WorkoutList = ({ workouts }) => {
  return (
    <div className="workout-list">
      <h2>Workouts</h2>
      {workouts.map(workout => (
        <WorkoutItem key={workout.id} workout={workout} />
      ))}
    </div>
  );
};

export default WorkoutList;
