import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getMovieDetails, getRecommendedMovies } from "../services/api";
import MovieCard from "../components/MovieCard";

function MovieDetailsPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState(null);
  const [recommendedMovies, setRecommendedMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const data = await getMovieDetails(id);
        setMovie(data);
        const recommendations = await getRecommendedMovies(id);
        setRecommendedMovies(recommendations.results);
        setLoading(false);
      } catch (error) {
        setError("Failed to fetch movie details");
        setLoading(false);
      }
    };

    fetchMovieDetails();
  }, [id]);

  const handleMovieClick = (movieId) => {
    navigate(`/movie/${movieId}`);
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="movie-details">
      {movie && (
        <>
          <h2>{movie.title}</h2>
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
          />
          <p>
            <strong>Release Date:</strong> {movie.release_date}
          </p>
          <p>
            <strong>Overview:</strong> {movie.overview}
          </p>
          <p>
            <strong>Genres:</strong>{" "}
            {movie.genres.map((genre) => genre.name).join(", ")}
          </p>
          <p>
            <strong>Rating:</strong> {movie.vote_average}/10
          </p>
          <h3>Recommended Movies</h3>
          <div className="movie-list">
            {recommendedMovies.length > 0 ? (
              recommendedMovies.map((movie) => (
                <MovieCard
                  key={movie.id}
                  movie={{
                    title: movie.title,
                    poster: `https://image.tmdb.org/t/p/w200${movie.poster_path}`,
                    releaseDate: movie.release_date,
                  }}
                  onClick={() => handleMovieClick(movie.id)} // Corrected usage
                />
              ))
            ) : (
              <p>No recommendations available.</p>
            )}
          </div>
        </>
      )}
    </div>
  );
}

export default MovieDetailsPage;
