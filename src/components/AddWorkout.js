import React, { useState } from "react";

function AddWorkout({ onAddWorkout }) {
  const [exercise, setExercise] = useState('');
  const [weight, setWeight] = useState('');
  const [sets, setSets] = useState('');
  const [reps, setReps] = useState('');
  const [days, setDays] = useState('');

  function handleSubmit(e) {
    e.preventDefault()

    const newWorkout = {
      exercise: exercise,
      weight: weight,
      sets: sets,
      reps: reps,
      days: days
    }

    fetch(`http://localhost:3000/workouts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newWorkout)
    })
    .then((r) => r.json())
    .then(console.log("workout added"));


    onAddWorkout(newWorkout)

    setExercise('')
    setWeight('')
    setSets('')
    setReps('')
    setDays('')

  }

  return (
    <div>
      <form id="add-workout-form" onSubmit={handleSubmit}>
        <h1>Add a workout</h1>
        <br></br>
        <label>Name:</label>
        <input
          type="text"
          value={exercise}
          onChange={(e) => setExercise(e.target.value)}
        />
        <br></br>
        <label>Weight:</label>
        <input
          type="number"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
        <br></br>
        <label>Sets:</label>
        <input
          type="number"
          value={sets}
          onChange={(e) => setSets(e.target.value)}
        />
        <br></br>
        <label>Reps:</label>
        <input
          type="number"
          value={reps}
          onChange={(e) => setReps(e.target.value)}
        />
        <br></br>
        <label>Days:</label>
        <input
          type="text"
          value={days}
          onChange={(e) => setDays(e.target.value)}
        />
        <br></br>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default AddWorkout;