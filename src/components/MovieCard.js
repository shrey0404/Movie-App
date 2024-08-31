import React from "react";

function MovieCard({ movie, onClick, onFavorite, isFavorite }) {
  return (
    <div className="movie-card">
      <img src={movie.poster} alt={movie.title} />
      <h3>{movie.title}</h3>
      <p>{movie.releaseDate}</p>
      <button onClick={onClick}>View Details</button>
      <button onClick={onFavorite}>
        {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
      </button>
    </div>
  );
}

export default MovieCard;
