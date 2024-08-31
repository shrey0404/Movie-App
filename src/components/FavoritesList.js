import React from "react";
import MovieCard from "./MovieCard";

function FavoritesList({ favorites, onFavorite }) {
  return (
    <div className="favorites-list">
      <h2>Favorites</h2>
      <div className="favlist2">
        {favorites.length > 0 ? (
          favorites.map((movie) => (
            <MovieCard
              key={movie.id}
              movie={{
                title: movie.title,
                poster: `https://image.tmdb.org/t/p/w200${movie.poster_path}`,
                releaseDate: movie.release_date,
              }}
              onFavorite={() => onFavorite(movie)}
              isFavorite={true} // Always true because these are favorites
            />
          ))
        ) : (
          <p>No favorite movies added.</p>
        )}
      </div>
    </div>
  );
}

export default FavoritesList;
