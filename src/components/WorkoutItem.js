import React, { useState } from "react";


function WorkoutItem({ workout, onDeleteWorkout, onSave }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedWorkout, setEditedWorkout] = useState({ ...workout });
  const [isFavorite, setIsFavorite] = useState(false)

  function handleEditClick() {
    setIsEditing(true)
  }

  function handleSaveClick() {
    setIsEditing(false)
    onSave(editedWorkout)
  }

  function handleInputChange(e) {
    const { name, value } = e.target;
    setEditedWorkout((prevWorkout) => ({
     ...prevWorkout,
     [name]: value,
    }));
  }

  function handleDeleteClick() {
    onDeleteWorkout(workout)
  }

  function handleFavClick() {
    setIsFavorite((isFavorite) => !isFavorite)
  }

  return (
    <div className="workout-card">
      {isEditing ? (
        <div id="edit-form">
          <label>Name: </label>
          <input
            type="text"
            name="exercise"
            value={editedWorkout.exercise}
            onChange={handleInputChange}
          />
          <br></br>
          <label>Weight(lbs): </label>
          <input
            type="number"
            name="weight"
            value={editedWorkout.weight}
            onChange={handleInputChange}
          />
          <br></br>
          <label>Sets: </label>
          <input
            type="number"
            name="sets"
            value={editedWorkout.sets}
            onChange={handleInputChange}
          />
          <br></br>
          <label>Reps: </label>
          <input 
            type="number"
            name="reps"
            value={editedWorkout.reps}
            onChange={handleInputChange}
          />
          <br></br>
          <label>Days: </label>
          <input
            type="text"
            name="days"
            value={editedWorkout.days}
            onChange={handleInputChange}
          />
          <br></br>
          <button id="save-button" onClick={handleSaveClick}>SAVE</button>
        </div>
      ) : (
        <>
      <h2>{workout.exercise}</h2>
      <p>Weight(lbs): <span>{workout.weight}</span></p>
      <p>Sets: <span>{workout.sets}</span></p>
      <p>Reps: <span>{workout.reps}</span></p>
      <p>Days: <span>{workout.days}</span></p>
      <button id="edit-button" onClick={handleEditClick}>EDIT</button>
      <button id="delete-button" onClick={handleDeleteClick}>DELETE</button>
      {isFavorite ? (
        <button id='fav-button-clicked' onClick={handleFavClick}>★</button> )
        : (
          <button id='fav-button' onClick={handleFavClick}>☆</button>
        )
      }
      </>
      )}
    </div>
  );
}


export default WorkoutItem;