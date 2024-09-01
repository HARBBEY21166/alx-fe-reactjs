import React, { useState } from 'react';

const RegistrationForm = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
    // Basic validation logic to check that no fields are left empty
    if (username && email && password) {
      console.log('Form submitted successfully!');
    } else {
      setErrors({
        username: !username ? 'Username is required' : '',
        email: !email ? 'Email is required' : '',
        password: !password ? 'Password is required' : '',
      });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input type="text" value={username} onChange={(event) => setUsername(event.target.value)} />
        {errors.username && <div style={{ color: 'red' }}>{errors.username}</div>}
      </label>
      <br />
      <label>
        Email:
        <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} />
        {errors.email && <div style={{ color: 'red' }}>{errors.email}</div>}
      </label>
      <br />
      <label>
        Password:
        <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
        {errors.password && <div style={{ color: 'red' }}>{errors.password}</div>}
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default RegistrationForm;
