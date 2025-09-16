import React, { useState } from 'react';
import './LoginPage.css'; // Import the dedicated CSS file
import loginimg from '../assets/login.jpg';
import logo from '../assets/fin1.png';

// Login Page Component
const LoginPage = ({ onLoginSuccess }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(''); // Clear previous errors
    try {
      // Ensure this URL matches your backend authentication endpoint
      const AUTH_API_URL = 'http://localhost:5000/api/auth';
      const response = await fetch(`${AUTH_API_URL}/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        onLoginSuccess(data.token); // Pass the token to App.js
      } else {
        setError(data.message || 'Login failed. Please check your credentials.');
      }
    } catch (err) {
      console.error("Login API error:", err);
      setError('Network error or server unavailable. Please try again.');
    }
  };

  return (
    <div className="login-page-container">
      <div className="login-content-wrapper"> {/* New wrapper for image and card */}
        <div className="login-image-container">
          {/* Placeholder image. Replace with your actual image path */}
          {/* <img src="loginimg" alt="Login Visual" className="login-image" /> */}
          <img src={loginimg} alt="Login Visual" className="login-image" />

        </div>
        <div className="login-card">
          {/* <img src={logo} alt="FinanceApp Logo" className="login-logo"/> */}
          <h2 className="login-title">Login to FinanceApp</h2>
          <form onSubmit={handleLogin}>
            <div className="login-form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="login-form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            {error && <p className="login-error">{error}</p>}
            <button type="submit" className="login-button">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
