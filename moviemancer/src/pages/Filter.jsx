import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
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
    "Documentary", "Drama", "Family", "Fantasy", "Film Noir", "History",
    "Horror", "Musical", "Mystery", "Romance", "Sci-Fi", "Sport",
    "Thriller", "War", "Western"
  ];

  // Handle genre selection
  const handleGenreChange = (genre) => {
    setSelectedGenres(prev =>
      prev.includes(genre) ? prev.filter(g => g !== genre) : [...prev, genre]
    );
  };

  // Apply Filters
  const applyFilters = (e) => {
    e.preventDefault();

    const filters = {
      genres: selectedGenres.join(","), // Convert array to string for URL
      startYear: startYear ? startYear.getFullYear() : "",
      endYear: endYear ? endYear.getFullYear() : "",
      imdbScore: imdbScore
    };

    // Navigate to Recommendations page with filters in URL
    navigate(`/Recommendation?${new URLSearchParams(filters).toString()}`);
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
          />

          <button type="submit">Apply Filters</button>
        </form>
      </div>
    </div>
  );
};

export default FilterPage;
