import React from "react";
import "../App.css";

const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card">
      <img src={movie.poster} alt={movie.title} />
      <h3>{movie.title}</h3>
      <p>Release Date: {movie.releaseDate}</p>
    </div>
  );
};

export default MovieCard;
