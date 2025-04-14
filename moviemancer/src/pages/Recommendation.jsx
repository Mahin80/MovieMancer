import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./Recommendation.css";

const TMDB_API_KEY = "7772a197ab7028bd72e8575e4dd78c85"; // Replace with your API Key

function RecommendationsPage() {
  const location = useLocation();
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(false);

  // Parse filters from URL
  const queryParams = new URLSearchParams(location.search);
  const genres = queryParams.get("genres") || "";
  const startYear = queryParams.get("startYear") || "";
  const endYear = queryParams.get("endYear") || "";
  const imdbScore = queryParams.get("imdbScore") || "";

  // Fetch a movie based on filters
  const fetchMovie = async () => {
    setMovie(null); // Reset movie before fetching
    setError(false); // Reset error

    let url = `https://api.themoviedb.org/3/discover/movie?api_key=${TMDB_API_KEY}`;

    if (genres) url += `&with_genres=${genres}`;
    if (startYear) url += `&primary_release_date.gte=${startYear}-01-01`;
    if (endYear) url += `&primary_release_date.lte=${endYear}-12-31`;
    if (imdbScore) url += `&vote_average.gte=${imdbScore}`;

    console.log("Fetching movie from:", url); // Debugging: Check API request

    try {
      const response = await fetch(url);
      const data = await response.json();

      console.log("API Response:", data); // Debugging: See API response

      if (data.results && data.results.length > 0) {
        const randomMovie = data.results[Math.floor(Math.random() * data.results.length)];
        setMovie(randomMovie);
      } else {
        setError(true); // No movies found
      }
    } catch (error) {
      console.error("Error fetching movie:", error);
      setError(true);
    }
  };

  useEffect(() => {
    fetchMovie();
  }, [location.search]);

  return (
    <div className="recommendations-page">
      <h2>Recommended Movie</h2>

      {/* Show Error Message if No Movies Found */}
      {error ? (
        <div>
          <p>No movies found. Try changing the filters.</p>
          <button onClick={fetchMovie}>Try Again</button>
        </div>
      ) : movie ? (
        <div className="movie-card">
          <h3>{movie.title}</h3>
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
          />
          <p><strong>Release Date:</strong> {movie.release_date}</p>
          <p><strong>Rating:</strong> {movie.vote_average}</p>
          <p>{movie.overview}</p>
          <button onClick={fetchMovie}>Next Recommendation</button>
        </div>
      ) : (
        <p>Loading movie...</p>
      )}
    </div>
  );
}

export default RecommendationsPage;
