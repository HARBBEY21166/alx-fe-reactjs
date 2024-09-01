import React from 'react';
import { useContext } from 'react';
import { AuthContext } from './context/authContext';

const Dashboard = () => {
  const { user } = useContext(AuthContext);

  return (
    <div>
      Welcome, {user.name}!
      <button onClick={() => logout()}>Logout</button>
    </div>
  );
};

export default Dashboard;
