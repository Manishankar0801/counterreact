import { act, useState } from "react";
import "../style.css";
const AddMovie = ({ addMovie }) => {
  let [newMovie, setNewMovie] = useState("");
  const handleNameInput = (e) => {
    e.preventDefault();
    newMovie = e.target.value;
    setNewMovie(newMovie);
  };
  const handleAddMovie = () => {
    // console.log(newMovie);
    addMovie(newMovie);
    setNewMovie("");
  };
  return (
    <div>
      <input
        onChange={handleNameInput}
        placeholder="add movie name"
        value={newMovie}
      ></input>
      <button onClick={handleAddMovie}>Add</button>
    </div>
  );
};

export default AddMovie;