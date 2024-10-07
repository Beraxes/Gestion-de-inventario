import React, { useState } from 'react';
import '../styles/Login.css';
import AuthService from '../utils/AxiosInstance';

function Register() {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [name, setName] = useState(''); // New state variable for name
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    try {
      const response = await AuthService.register(name, username, email, password);
      console.log('Registration successful:', response.name);
      // Handle the response data as needed
    } catch (error) {
      console.error('Registration failed:', error.response ? error.response : error.message);
      setError(error.response ? error.response.message : 'An error occurred during registration.');
    }
  };

  return (
    <div className="form-floating mb-3">
      <h2>Register</h2>
      {error && <p className="error-message">{error}</p>}
      <form onSubmit={handleSubmit}>
        <div className="form-floating mb-3">
          <input
            type="text"
            id="name"
            placeholder='Enter your name'
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="form-control"
          />
          <label htmlFor="name">Name</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="email"
            id="email"
            placeholder='Enter email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="form-control"
          />
          <label htmlFor="email">Email</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="text"
            id="username"
            placeholder='Enter username'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            className="form-control"
          />
          <label htmlFor="username">Username</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="password"
            id="password"
            placeholder='Enter password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="form-control"
          />
          <label htmlFor="password">Password</label>
        </div>
        <div className="form-floating">
          <input
            type="password"
            id="confirmPassword"
            placeholder='Confirm password'
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            className="form-control"
          />
          <label htmlFor="confirmPassword">Confirm Password</label>
        </div>
        <button type="submit" className="btn btn-primary">
          Register
        </button>
      </form>
    </div>
  );
}

export default Register;
