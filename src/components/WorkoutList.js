import React, { useState, useEffect } from "react";
import WorkoutItem from "./WorkoutItem";

function WorkoutList({ workouts, onDeleteWorkout, onSave }) {

  return (
    <div>
      <h1 id="workout-list-title">
         Workouts 
      </h1>
    {workouts.map((workout) => (
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