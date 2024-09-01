import React from 'react';
import { useContext } from 'react';
import { AuthProvider, AuthContext } from './context/authContext';
import { login } from './api/authApi';

const App = () => {
  const { user, token, login: loginFunction, logout } = useContext(AuthContext);

  const handleLogin = async (username, password) => {
    const response = await loginFunction(username, password);
    if (response.success) {
      loginFunction(response.user, response.token);
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <AuthProvider>
      {user ? (
        <div>
          Welcome, {user.name}!
          <button onClick={logout}>Logout</button>
        </div>
      ) : (
        <div>
          <input type="text" placeholder="Username" />
          <input type="password" placeholder="Password" />
          <button onClick={handleLogin}>Login</button>
        </div>
      )}
    </AuthProvider>
  );
};

export default App;
