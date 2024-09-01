// src/components/RegistrationForm.jsx
import React, { useState } from 'react';
import { register } from '../api/authApi';
import { AuthContext } from '../context/authContext';

const RegistrationForm = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({}); // Add this line
  const [error, setError] = useState(null);
  const { login } = useContext(AuthContext);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const newErrors = {}; // Initialize an empty object to store errors

    if (!username) {
      newErrors.username = 'Username is required';
    }

    if (!email) {
      newErrors.email = 'Email is required';
    }

    if (!password) {
      newErrors.password = 'Password is required';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors); // Update the errors state
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
      {errors.username && <div style={{ color: 'red' }}>{errors.username}</div>}
      <br />

      <label>Email:</label>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      {errors.email && <div style={{ color: 'red' }}>{errors.email}</div>}
      <br />

      <label>Password:</label>
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      {errors.password && <div style={{ color: 'red' }}>{errors.password}</div>}
      <br />

      {error && <div style={{ color: 'red' }}>{error}</div>}

      <button type="submit">Register</button>
    </form>
  );
};

export default RegistrationForm;
