import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify'; // ✅ import toast
import 'react-toastify/dist/ReactToastify.css'; // ✅ import styles
import './AuthForm.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';

import loginLogo from '../../assets/logo/login.png';
import signupLogo from '../../assets/logo/signup.png';

function AuthForm({ mode }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg('');

    try {
      const url =
        mode === 'signin'
          ? 'http://localhost:3000/auth/login'
          : 'http://localhost:3000/auth/signup';

      const payload =
        mode === 'signin'
          ? { email, password }
          : { username, email, password };

      const response = await axios.post(url, payload);

      if (mode === 'signin' && response.data?.access_token) {
        localStorage.setItem('token', response.data.access_token);
        navigate('/dashboard');
      } else if (mode === 'signup') {
        toast.success('Signup successful! Please log in.', { autoClose: 1000 });
        setTimeout(() => {
          navigate('/login');
        }, 2000); // Wait for toast to finish
      }
    } catch (err) {
      const error =
        err?.response?.data?.message || 'Authentication failed. Please try again.';
      setErrorMsg(Array.isArray(error) ? error.join(', ') : error);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="auth-logo">
        <img
          src={mode === 'signin' ? loginLogo : signupLogo} 
        /> 
        </div>
        <h2 className="auth-title">
          {mode === 'signin' ? 'Sign In' : 'Sign Up'}
        </h2>

        <form onSubmit={handleSubmit} className="auth-form">
          {mode === 'signup' && (
            <div className="input-wrapper">
            <FontAwesomeIcon icon={faUser} className="input-icon" />
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="auth-input"
              required
            />
            </div>
          )}

          <div className="input-wrapper">
            <FontAwesomeIcon icon={faEnvelope} className="input-icon" />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="auth-input"
            required
          />
          </div>

          <div className="input-wrapper">
            <FontAwesomeIcon icon={faLock} className="input-icon" />  
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="auth-input"
            required
          />
          </div>
          <button type="submit" className="auth-button">
            {mode === 'signin' ? 'Sign In' : 'Sign Up'}
          </button>

          {errorMsg && <p className="auth-error">{errorMsg}</p>}
        </form>

        <div className="auth-switch">
          {mode === 'signin' ? (
            <p>
              Don&apos;t have an account?{' '}
              <a href="/signup" className="auth-link">
                Sign Up
              </a>
            </p>
          ) : (
            <p>
              Already have an account?{' '}
              <a href="/login" className="auth-link">
                Sign In
              </a>
            </p>
          )}
        </div>
      </div>

      <ToastContainer position="top-center" /> {/* ✅ Add this */}
    </div>
  );
}

export default AuthForm;
