import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import Cookies from "js-cookie";
import "react-datepicker/dist/react-datepicker.css";
import "./Filter.css";

const FilterPage = () => {
  const navigate = useNavigate();
  const [startYear, setStartYear] = useState(null);
  const [endYear, setEndYear] = useState(null);
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [imdbScore, setImdbScore] = useState("");

  const genres = [
    "Action", "Adventure", "Animation", "Biography", "Comedy", "Crime",
    "Documentary", "Drama", "Family", "Fantasy", "History",
    "Horror", "Music", "Mystery", "Romance", "Sci-Fi", "TV movie",
    "Thriller", "War", "Western"
  ];

  const genreMap = {
    "Action": 28, "Adventure": 12, "Animation": 16, "Biography": 1,
    "Comedy": 35, "Crime": 80, "Documentary": 99, "Drama": 18,
    "Family": 10751, "Fantasy": 14, "History": 36,
    "Horror": 27, "Music": 1, "Mystery": 9648, "Romance": 10749,
    "Sci-Fi": 878,"TV movie ":10770, "Thriller": 53, "War": 10752, "Western": 37
  };

  const reverseGenreMap = Object.fromEntries(
    Object.entries(genreMap).map(([name, id]) => [id, name])
  );

  // ✅ Load filter data from cookie on mount
  useEffect(() => {
    const savedFilters = Cookies.get("moviemancer_filters");
    if (savedFilters) {
      const parsed = JSON.parse(savedFilters);
      setStartYear(parsed.startYear ? new Date(parsed.startYear, 0) : null);
      setEndYear(parsed.endYear ? new Date(parsed.endYear, 0) : null);
      setImdbScore(parsed.imdbScore || "");
      
      const genreIds = parsed.genres?.split(",") || [];
      const genreNames = genreIds
        .map((id) => reverseGenreMap[parseInt(id)])
        .filter(Boolean);
      setSelectedGenres(genreNames);
    }
  }, []);

  const handleGenreChange = (genre) => {
    setSelectedGenres((prev) =>
      prev.includes(genre)
        ? prev.filter((g) => g !== genre)
        : [...prev, genre]
    );
  };

  const applyFilters = (e) => {
    e.preventDefault();

    const genreIds = selectedGenres.map((name) => genreMap[name]).filter(Boolean);

    const filters = {
      genres: genreIds.join(","),
      startYear: startYear ? startYear.getFullYear() : "",
      endYear: endYear ? endYear.getFullYear() : "",
      imdbScore: imdbScore
    };

    Cookies.set("moviemancer_filters", JSON.stringify(filters), { expires: 1 });
    navigate(`/recommendation?${new URLSearchParams(filters).toString()}`);
  };

  const resetFilters = () => {
    setSelectedGenres([]);
    setStartYear(null);
    setEndYear(null);
    setImdbScore("");
    Cookies.remove("moviemancer_filters");
  };

  return (
    <div className="page-container">
      <div className="form-container">
        <h2>Filter Movies</h2>
        <h3>Genres</h3>
        <div className="genres">
          {genres.map((genre) => (
            <div
              key={genre}
              className={`genre-bubble ${selectedGenres.includes(genre) ? 'selected' : ''}`}
              onClick={() => handleGenreChange(genre)}
            >
              {genre}
            </div>
          ))}
        </div>

        <form onSubmit={applyFilters}>
          <div className="year-range">
            <DatePicker
              selected={startYear}
              onChange={setStartYear}
              showYearPicker
              dateFormat="yyyy"
              placeholderText="Start Year"
              className="datepicker-input"
            />
            <DatePicker
              selected={endYear}
              onChange={setEndYear}
              showYearPicker
              dateFormat="yyyy"
              placeholderText="End Year"
              className="datepicker-input"
            />
          </div>

          <input
            type="text"
            placeholder="IMDb Score"
            value={imdbScore}
            onChange={(e) => setImdbScore(e.target.value)}
            style={{width:"25%"}}
          />

          <div className="form-buttons">
            <button type="submit">Apply Filters</button>
            <button type="button" className="reset-button" onClick={resetFilters}>
              Reset Filters
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FilterPage;
