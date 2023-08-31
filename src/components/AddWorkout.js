import React, { useState } from 'react';

const AddWorkout = ({ addWorkout }) => {
  const [exercise, setExercise] = useState('');
  const [weight, setWeight] = useState('');
  const [sets, setSets] = useState('');
  const [reps, setReps] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (exercise && weight && sets && reps) {
      addWorkout({
        exercise,
        weight: parseInt(weight),
        sets: parseInt(sets),
        reps: parseInt(reps)
      });
      setExercise('');
      setWeight('');
      setSets('');
      setReps('');
    }
  };

  return (
    <div className="add-workout">
      <h2>Add Workout</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Exercise"
          value={exercise}
          onChange={e => setExercise(e.target.value)}
        />
        <input
          type="number"
          placeholder="Weight (lbs)"
          value={weight}
          onChange={e => setWeight(e.target.value)}
        />
        <input
          type="number"
          placeholder="Sets"
          value={sets}
          onChange={e => setSets(e.target.value)}
        />
        <input
          type="number"
          placeholder="Reps"
          value={reps}
          onChange={e => setReps(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default AddWorkout;
