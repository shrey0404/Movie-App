import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import MovieCard from "../components/MovieCard";
import { searchMovies } from "../services/api";
import FavoritesList from "../components/FavoritesList";

function SearchPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);
  const [favorites, setFavorites] = useState(
    JSON.parse(localStorage.getItem("favorites")) || []
  );
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMovies = async () => {
      if (searchTerm) {
        const results = await searchMovies(searchTerm);
        setMovies(results);
      }
    };

    fetchMovies();
  }, [searchTerm]);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const handleMovieClick = (id) => {
    navigate(`/movie/${id}`);
  };

  const handleFavorite = (movie) => {
    setFavorites((prevFavorites) => {
      if (prevFavorites.find((fav) => fav.id === movie.id)) {
        return prevFavorites.filter((fav) => fav.id !== movie.id);
      } else {
        return [...prevFavorites, movie];
      }
    });
  };

  const isFavorite = (movieId) => {
    return favorites.some((fav) => fav.id === movieId);
  };

  return (
    <div>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <div className="movie-list">
        {movies.length > 0 ? (
          movies.map((movie) => (
            <MovieCard
              key={movie.id}
              movie={{
                title: movie.title,
                poster: `https://image.tmdb.org/t/p/w200${movie.poster_path}`,
                releaseDate: movie.release_date,
              }}
              onClick={() => handleMovieClick(movie.id)}
              onFavorite={() => handleFavorite(movie)}
              isFavorite={isFavorite(movie.id)} // Pass isFavorite prop
            />
          ))
        ) : (
          <p>No results found.</p>
        )}
      </div>
      <FavoritesList favorites={favorites} onFavorite={handleFavorite} />
    </div>
  );
}

export default SearchPage;
