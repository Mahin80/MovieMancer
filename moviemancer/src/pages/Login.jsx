import React from 'react';
import './Login.css';

function LoginPage() {
  return (
    <div className="login-page">
      <div className="login-container">
        <h2>Login</h2>
        <form>
          <label>
            <span>Email</span>
            <input type="email" placeholder="Enter your email" style={{fontFamily:" Quantico",}} />
          </label>
          <label>
            <span>Password</span>
            <input type="password" placeholder="Enter your password" style={{fontFamily:" Quantico",}} />
          </label>
          <div className="login-options">
            <a href="./signup">Don't have an account? Signup</a>
            <label>
              <input type="checkbox" /> Remember me
            </label>
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
