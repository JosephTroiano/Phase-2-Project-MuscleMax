import React, { useState } from "react";

function AddWorkout({ onAddWorkout }) {
  const [exercise, setExercise] = useState('');
  const [weight, setWeight] = useState('');
  const [sets, setSets] = useState('');
  const [reps, setReps] = useState('');
  const [days, setDays] = useState('');

  function handleSubmit(e) {
    e.preventDefault()

    if (exercise.length && weight.length && sets.length && reps.length 
       && days.length > 0) {

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
    .then((data) => {
      onAddWorkout(data)
    });

    setExercise('')
    setWeight('')
    setSets('')
    setReps('')
    setDays('')

    alert("Workout Added!")


  } else {
    alert("**PLEASE FILL OUT ALL FIELDS**")
  }};



  return (
    <div>
      <form id="add-workout-form" onSubmit={handleSubmit}>
        <h1>Add a workout</h1>
        <br></br>
        <label>Name:</label>
        <input
          type="text"
          name="exercise"
          value={exercise}
          onChange={(e) => setExercise(e.target.value)}
        />
        <br></br>
        <label>Weight(lbs):</label>
        <input
          type="number"
          name="weight"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
        <br></br>
        <label>Sets:</label>
        <input
          type="number"
          name="sets"
          value={sets}
          onChange={(e) => setSets(e.target.value)}
        />
        <br></br>
        <label>Reps:</label>
        <input
          type="number"
          name="reps"
          value={reps}
          onChange={(e) => setReps(e.target.value)}
        />
        <br></br>
        <label>Days:</label>
        <input
          type="text"
          name="days"
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