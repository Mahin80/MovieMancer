import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for programmatic navigation
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faWandMagicSparkles } from '@fortawesome/free-solid-svg-icons'; // Import specific icon
import './Home.css';

function HomePage() {
  const navigate = useNavigate(); // Hook to programmatically navigate to other pages

  // Handle button clicks for navigation
  const handleRecommendationClick = () => {
    navigate('/recommendation');
  };

  const handleFilterClick = () => {
    navigate('/filter');
  };

  return (
    <div className="home-page">
      <h2>Welcome to MovieMancer  <FontAwesomeIcon icon={faWandMagicSparkles} /></h2>
      <p>Can't decide what to watch next? This is the site for you.</p>
      <div className="home-buttons">
        <button onClick={handleRecommendationClick}>Recommend the next watch</button>
        <button onClick={handleFilterClick}>Filter your watch choices</button>
      </div>
    </div>
  );
}

export default HomePage;
