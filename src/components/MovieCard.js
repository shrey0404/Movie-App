import React from "react";
import "../App.css"; // Import the CSS file for styling

function MovieCard({ movie, onClick, onFavorite, isFavorite }) {
  return (
    <div className="movie-card">
      <img src={movie.poster} alt={movie.title} className="movie-poster" />
      <h3 className="movie-title">{movie.title}</h3>
      <p className="movie-release-date">{movie.releaseDate}</p>
      <button className="view-details-button" onClick={onClick}>
        View Details
      </button>
      <button
        className={`favorite-button ${isFavorite ? "remove" : "add"}`}
        onClick={onFavorite}
      >
        {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
      </button>
    </div>
  );
}

export default MovieCard;
