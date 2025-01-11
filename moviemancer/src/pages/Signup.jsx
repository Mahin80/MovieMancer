import React from 'react';
import './Signup.css';

function SignupPage() {
  return (
    <div className="signup-page">
      <div className="signup-container">
        <h2>Signup</h2>
        <form>
          <input type="text" placeholder="First Name" required style={{fontFamily:" Quantico",}} />
          <input type="text" placeholder="Last Name" required style={{fontFamily:" Quantico",}}/>
          <input type="text" placeholder="Username" required style={{fontFamily:" Quantico",}}/>
          <input type="email" placeholder="Email" required style={{fontFamily:" Quantico",}}/>
          <input type="password" placeholder="Password" required style={{fontFamily:" Quantico",}}/>
          <input type="password" placeholder="Confirm Password" required style={{fontFamily:" Quantico",}}/>
          <button type="submit">Signup</button>
        </form>
        <p>
          Already have an account? <a href="/login">Login</a>
        </p>
      </div>
    </div>
  );
}

export default SignupPage;
