import React, { useState } from 'react';

const AddWorkout = ({ addWorkout }) => {
  const [exercise, setExercise] = useState('');
  const [weight, setWeight] = useState('');
  const [sets, setSets] = useState('');
  const [reps, setReps] = useState('');
  const [days, setDays] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();
    if (exercise && weight && sets && reps) {
      const newWorkout = {
        exercise,
        weight: parseInt(weight),
        sets: parseInt(sets),
        reps: parseInt(reps),
        days
      };

     
      addWorkout(newWorkout);

      
      try {
        const response = await fetch('http://localhost:3000/workouts', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(newWorkout)
        });

        if (!response.ok) {
          throw new Error('Error adding workout to server');
        }

        
        setExercise('');
        setWeight('');
        setSets('');
        setReps('');
        setDays('');
      } catch (error) {
        console.error('Error adding workout:', error);
      }
    }
  };

  return (
    <div className="add-workout">
      <h2>Add a Workout</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Exercise"
          value={exercise}
          onChange={e => setExercise(e.target.value)}
        />
        <br></br>
        <input
          type="number"
          placeholder="Weight (lbs)"
          value={weight}
          onChange={e => setWeight(e.target.value)}
        />
        <br></br>
        <input
          type="number"
          placeholder="Sets"
          value={sets}
          onChange={e => setSets(e.target.value)}
        />
        <br></br>
        <input
          type="number"
          placeholder="Reps"
          value={reps}
          onChange={e => setReps(e.target.value)}
        />
        <br></br>
        <input 
          type="text"
          placeholder="Days"
          value={days}
          onChange={e => setDays(e.target.value)}
        />
        <br></br>
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default AddWorkout;
