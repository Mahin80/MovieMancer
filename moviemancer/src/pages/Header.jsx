import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faWandMagicSparkles } from '@fortawesome/free-solid-svg-icons'; // Import specific icon
import './Header.css';

function Header() {
  return (
    <header className="header">
      <h1>
        MovieMancer
        <FontAwesomeIcon icon={faWandMagicSparkles} />
      </h1>
      <nav>
        <a href="./home">Home</a>
        <a href="./login">Login</a>
        <a href="./contactus">Contact</a>
      </nav>
    </header>
  );
}

export default Header;
