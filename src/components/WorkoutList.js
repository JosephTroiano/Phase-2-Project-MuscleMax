import React, { useState, useEffect } from "react";
import WorkoutItem from "./WorkoutItem";

function WorkoutList({ workouts }) {

  
  return (
    <div>
      <h1 id="workout-list-title">
        Workouts
      </h1>
    {workouts.map((workout) => (
      <WorkoutItem
        key={workout.id}
        workout={workout}
      />
    ))}
    </div>
  )
}

export default WorkoutList