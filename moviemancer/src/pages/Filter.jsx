import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./Filter.css";

const FilterPage = () => {
  const [startYear, setStartYear] = useState(null); // State for start year
  const [endYear, setEndYear] = useState(null); // State for end year
  const [selectedGenres, setSelectedGenres] = useState([]); // State to track selected genres

  // Get the current year
  const currentYear = new Date().getFullYear();

  // Handle genre selection
  const handleGenreChange = (genre) => {
    if (selectedGenres.includes(genre)) {
      setSelectedGenres(selectedGenres.filter(item => item !== genre)); // Remove genre if already selected
    } else {
      setSelectedGenres([...selectedGenres, genre]); // Add genre if not selected
    }
  };

  const genres = [
    "Action", "Adventure", "Animation", "Biography", "Comedy", "Crime",
    "Documentary", "Drama", "Family", "Fantasy", "Film Noir", "History",
    "Horror", "Musical", "Mystery", "Romance", "Sci-Fi", "Sport",
    "Thriller", "War", "Western"
  ];

  return (
    <div className="page-container">
      <div className="form-container">
        <h2 style={{ fontFamily: "Quantico" }}>Profile</h2>
        <h3 style={{ fontFamily: "Quantico" }}>Genres</h3>
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
        <form>
          {/* Year Range Picker */}
          <div className="year-range">
            {/* Start Year Picker */}
            <DatePicker
              selected={startYear}
              onChange={(date) => setStartYear(date)}
              showYearPicker
              dateFormat="yyyy"
              placeholderText="Select Start Year"
              minDate={new Date("1900-01-01")}
              maxDate={new Date(`${currentYear}-12-31`)} // max is the current year
              className="datepicker-input"
            />
            {/* End Year Picker */}
            <DatePicker
              selected={endYear}
              onChange={(date) => setEndYear(date)}
              showYearPicker
              dateFormat="yyyy"
              placeholderText="Select End Year"
              minDate={new Date("1900-01-01")}
              maxDate={new Date(`${currentYear}-12-31`)} // max is the current year
              className="datepicker-input"
            />
          </div>
          <input type="text" placeholder="IMDB Score" />
          <br />
          <br />
          <button type="submit">Save</button>
        </form>
      </div>
    </div>
  );
};

export default FilterPage;
