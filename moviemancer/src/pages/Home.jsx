import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faWandMagicSparkles } from '@fortawesome/free-solid-svg-icons';
import './Home.css';

function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="home-page">
      <h2>
        Welcome to MovieMancer{' '}
        <FontAwesomeIcon icon={faWandMagicSparkles} />
        <span className="glitter"></span>
      </h2>

      <p>Can't decide what to watch next? This is the site for you.</p>

      <div className="home-buttons">
        <button onClick={() => navigate('/recommendation')}>
          Recommend the next watch
        </button>
        <button onClick={() => navigate('/filter')}>
          Filter your watch choices
        </button>
      </div>
    </div>
  );
}

export default HomePage;
