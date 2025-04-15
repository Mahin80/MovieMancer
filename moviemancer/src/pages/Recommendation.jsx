import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Cookies from "js-cookie";
import "./Recommendation.css";

const TMDB_API_KEY = "7772a197ab7028bd72e8575e4dd78c85";

// Genre ID to Name map
const genreNameMap = {
  28: "Action", 12: "Adventure", 16: "Animation", 35: "Comedy",
  80: "Crime", 99: "Documentary", 18: "Drama", 10751: "Family",
  14: "Fantasy", 36: "History", 27: "Horror", 10402: "Music",
  9648: "Mystery", 10749: "Romance", 878: "Sci-Fi", 10770: "TV Movie",
  53: "Thriller", 10752: "War", 37: "Western"
};

function RecommendationsPage() {
  const location = useLocation();
  const [movie, setMovie] = useState(null);
  const [trailer, setTrailer] = useState(null);
  const [cast, setCast] = useState([]);
  const [noResults, setNoResults] = useState(false);

  const queryParams = new URLSearchParams(location.search);
  let genres = queryParams.get("genres");
  let startYear = queryParams.get("startYear");
  let endYear = queryParams.get("endYear");
  let imdbScore = queryParams.get("imdbScore");

  if (!genres && Cookies.get("moviemancer_filters")) {
    const savedFilters = JSON.parse(Cookies.get("moviemancer_filters"));
    genres = savedFilters.genres;
    startYear = savedFilters.startYear;
    endYear = savedFilters.endYear;
    imdbScore = savedFilters.imdbScore;
  }

  const fetchMovie = async () => {
    setMovie(null);
    setTrailer(null);
    setCast([]);
    setNoResults(false);

    let url = `https://api.themoviedb.org/3/discover/movie?api_key=${TMDB_API_KEY}&language=en-US&sort_by=popularity.desc`;

    if (genres) url += `&with_genres=${genres}`;
    if (startYear) url += `&primary_release_date.gte=${startYear}-01-01`;
    if (endYear) url += `&primary_release_date.lte=${endYear}-12-31`;
    if (imdbScore) url += `&vote_average.gte=${imdbScore}`;

    try {
      const response = await fetch(url);
      const data = await response.json();

      if (data.results && data.results.length > 0) {
        const randomMovie = data.results[Math.floor(Math.random() * data.results.length)];
        setMovie(randomMovie);
        fetchTrailer(randomMovie.id);
        fetchCast(randomMovie.id);
      } else {
        setNoResults(true);
      }
    } catch (error) {
      console.error("Error fetching movie:", error);
      setNoResults(true);
    }
  };

  const fetchTrailer = async (movieId) => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${TMDB_API_KEY}&language=en-US`
      );
      const data = await response.json();

      const youtubeTrailer = data.results.find(
        (vid) => vid.site === "YouTube" && vid.type === "Trailer"
      );
      if (youtubeTrailer) {
        setTrailer(`https://www.youtube.com/embed/${youtubeTrailer.key}`);
      }
    } catch (error) {
      console.error("Error fetching trailer:", error);
    }
  };

  const fetchCast = async (movieId) => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${TMDB_API_KEY}&language=en-US`
      );
      const data = await response.json();
      const topCast = data.cast.slice(0, 5);
      setCast(topCast);
    } catch (error) {
      console.error("Error fetching cast:", error);
    }
  };

  const getGenreNames = (genreIds) => {
    return genreIds.map(id => genreNameMap[id]).filter(Boolean).join(", ");
  };

  useEffect(() => {
    fetchMovie();
  }, [location.search]);

  return (
    <div className="recommendations-page">
      <h2>Recommended Movie</h2>

      {noResults ? (
        <p>No movies found for the selected filters. Try adjusting your criteria.</p>
      ) : movie ? (
        <div className="movie-card">
          <h3>{movie.title}</h3>
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
          />
          <p><strong>Release Date:</strong> {movie.release_date}</p>
          <p><strong>Genres:</strong> {getGenreNames(movie.genre_ids)}</p>
          <p><strong>Vote Count:</strong> {movie.vote_count}</p>
          <p><strong>Rating:</strong> {movie.vote_average}</p>
          <p>{movie.overview}</p>

          {/* Cast Section */}
          {cast.length > 0 && (
            <div className="cast-section">
              <h4>Top Cast</h4>
              <div className="cast-grid">
                {cast.map((actor) => (
                  <div className="cast-card" key={actor.id}>
                    <img
                      src={
                        actor.profile_path
                          ? `https://image.tmdb.org/t/p/w185${actor.profile_path}`
                          : "https://via.placeholder.com/185x278?text=No+Image"
                      }
                      alt={actor.name}
                    />
                    <p><strong>{actor.name}</strong></p>
                    <p className="character">as {actor.character}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Trailer Section */}
          {trailer && (
            <div className="trailer">
              <h4>Trailer</h4>
              <iframe
                width="90%"
                height="500"
                src={trailer}
                title="YouTube Trailer"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          )}

          <button
            onClick={fetchMovie}
            className="recommend-button"
            >
            Recommend Another
          </button>
        </div>
      ) : (
        <p>Loading movie...</p>
      )}
    </div>
  );
}

export default RecommendationsPage;
