import React, { useState } from 'react';

const WorkoutItem = ({ workout, onEdit, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedWorkout, setEditedWorkout] = useState({ ...workout });

  const handleInputChange = e => {
    const { name, value } = e.target;
    setEditedWorkout(prevState => ({ ...prevState, [name]: value }));
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    onEdit(editedWorkout);
    setIsEditing(false);
  };

  const handleDeleteClick = () => {
    onDelete(workout.id);
  };

  return (
    <div className="workout-item">
      {isEditing ? (
        <>
        <div>
          <label htmlFor="exercise">Exercise:</label>
          <input
            type="text"
            id="exercise"
            name="exercise"
            value={editedWorkout.exercise}
            onChange={handleInputChange}
          />
          </div>
          <div>
          <label htmlFor="weight">Weight (lbs):</label>
          <input
            type="number"
            id="weight"
            name="weight"
            value={editedWorkout.weight}
            onChange={handleInputChange}
          />
          </div>
          <div>
          <label hmtlFor="sets">Sets:</label>
          <input
            type="number"
            id="sets"
            name="sets"
            value={editedWorkout.sets}
            onChange={handleInputChange}
          />
          </div>
          <div>
          <label htmlFor="reps">Reps:</label>
          <input
            type="number"
            id="sets"
            name="reps"
            value={editedWorkout.reps}
            onChange={handleInputChange}
          />
          </div>
          <div>
            <label htmlFor="days">Days:</label>
            <input
              type="text"
              id="days"
              name="days"
              value={editedWorkout.days}
              onChange={handleInputChange}
              />
          </div>
          <button id="save-button" onClick={handleSaveClick}>Save</button>
        </>
      ) : (
        <>
          <h2>{workout.exercise}</h2>
          <p>Weight: {workout.weight} lbs</p>
          <p>Sets: {workout.sets}</p>
          <p>Reps: {workout.reps}</p>
          <p>Days: {workout.days}</p>
          <button id="edit-button" onClick={handleEditClick}>Edit</button>
          <button id="delete-button" onClick={handleDeleteClick}>Remove</button>
        </>
      )}
    </div>
  );
};

export default WorkoutItem;
