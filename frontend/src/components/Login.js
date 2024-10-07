import React, { useState } from 'react';
import '../styles/Login.css';
import AuthService from '../utils/AxiosInstance';

function Login() {
  const [emailOrUsername, setEmailOrUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await AuthService.login(emailOrUsername, password);
      console.log('Login successful:', response.name);
      // Handle the response data as needed
    } catch (error) {
      console.error('Login failed:', error.response ? error.response : error.message);
      setError(error.response ? error.response.message : 'An error occurred during login.');
    }
  };

  return (
    <div className="form-floating mb-3">
    <h2>Login</h2>
    {error && <p className="error-message">{error}</p>}
    <form onSubmit={handleSubmit}>
      <div className="form-floating mb-3">
        <input
          type="text"
          id="emailOrUsername"
          placeholder=''
          value={emailOrUsername}
          onChange={(e) => setEmailOrUsername(e.target.value)}
          required
          className="form-control"
        />
        <label htmlFor="emailOrUsername">Enter email or username</label>
      </div>
      <div className="form-floating">
        <input
          type="password"
          id="password"
          placeholder=''
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="form-control"
        />
        <label htmlFor="password">Password</label>
      </div>
      <button type="submit" className="btn btn-primary">
        Login
      </button>
    </form>
  </div>
  );
}

export default Login;
