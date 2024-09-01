import React, { useState } from 'react';
import { register } from '../api/authApi';
import { AuthContext } from '../context/authContext';

const RegistrationForm = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const { login } = useContext(AuthContext);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!username) {
      setError('Username is required');
      return;
    }

    if (!email) {
      setError('Email is required');
      return;
    }

    if (!password) {
      setError('Password is required');
      return;
    }

    try {
      const response = await register(username, email, password);
      if (response.success) {
        login(username, password);
      } else {
        setError(response.error);
      }
    } catch (error) {
      setError('Registration failed. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Username:</label>
      <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      <br />

      <label>Email:</label>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <br />

      <label>Password:</label>
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <br />

      {error && <div style={{ color: 'red' }}>{error}</div>}

      <button type="submit">Register</button>
    </form>
  );
};

export default RegistrationForm;
