import { useState } from "react";
import Movie from "./Movie";
import AddMovie from "./AddMovie";

const Movies = () => {
  let [movies, setMovies] = useState(["Sholay", "Dil", "Golmaal", "DDLJ"]);
  const addMovie = (movie) => {
    // console.log(movie);
    let newMovies = [...movies, movie];
    // movies.push(movie);
    // console.log(movies);
    setMovies(newMovies);
  };
  return (
    <>
      <ul>
        {movies.map((movie, idx) => (
          <Movie movie={movie} key={idx} />
        ))}
      </ul>
      <AddMovie addMovie={addMovie} />
    </>
  );
};

export default Movies;