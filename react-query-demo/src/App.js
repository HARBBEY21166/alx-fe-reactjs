// src/App.js
import React from 'react';
import { useQuery } from 'react-query';
import { fetchUser } from './api/userApi';

const App = () => {
  const { data, error, isLoading } = useQuery('user', fetchUser);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return <div>User: {data.name}</div>;
};

export default App;
