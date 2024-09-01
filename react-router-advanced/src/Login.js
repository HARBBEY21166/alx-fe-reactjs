import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { AuthContext } from './context/authContext';
import { login } from './api/authApi';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();
  const { login: authLogin } = useContext(AuthContext);

  const handleLogin = async (event) => {
    event.preventDefault();
    const response = await authLogin(username, password);
    if (response.success) {
      history.push('/dashboard');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div>
      <form onSubmit={handleLogin}>
        <input type="text" value={username} onChange={(event) => setUsername(event.target.value)} placeholder="Username" />
        <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} placeholder="Password" />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
