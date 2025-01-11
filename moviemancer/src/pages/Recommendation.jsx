import React from 'react';
import './Recommendation.css';

function RecommendationsPage() {
  return (
    <div className="recommendations-page">
      <h2>Recommendations</h2>
      <div className="recommendations-container">
        <div className="movie-card">
          <h3>Interstellar</h3>
          <img
            src="" // Replace with the movie poster URL
            alt="Interstellar"
          />
        </div>
        <div className="movie-info">
          <div className="genres">
            <h4>Genres</h4>
            <button>Sci-fi</button>
            <button>Action</button>
            <button>Mystery</button>
            <button>Drama</button>
            <button>Adventure</button>
            <button>Thriller</button>
          </div>
          <div className="details">
            <button>Details</button>
            <p>
              When Earth becomes uninhabitable in the future, a farmer and
              ex-NASA pilot, Joseph Cooper, is tasked to pilot a spacecraft
              along with a team of researchers to find a new planet for humans.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecommendationsPage;
