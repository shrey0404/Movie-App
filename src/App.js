import React, { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar";
import MovieCard from "./components/MovieCard";
import { searchMovies } from "./services/api";
import "./App.css";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      if (searchTerm) {
        const results = await searchMovies(searchTerm);
        setMovies(results);
      }
    };

    fetchMovies();
  }, [searchTerm]);

  return (
    <div className="App">
      <header>
        <h1>Movie Search App</h1>
      </header>
      <main>
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
              />
            ))
          ) : (
            <p>No results found.</p>
          )}
        </div>
      </main>
    </div>
  );
}

export default App;
