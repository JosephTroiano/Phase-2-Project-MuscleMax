import React from "react"

function WorkoutItem({ workout }) {
  return (
    <div className="workout-card">
      <h2>{workout.exercise}</h2>
      <p>Weight: {workout.weight}</p>
      <p>Sets: {workout.sets}</p>
      <p>Reps: {workout.reps}</p>
      <p>Days: {workout.days}</p>
      <button id="edit-button">EDIT</button>
      <button id="delete-button">DELETE</button>
    </div>
  )
}

export default WorkoutItem;