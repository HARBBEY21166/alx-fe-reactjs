// src/components/UserProfile.jsx
import React from 'react';
import { Route, Switch, Link, useParams } from 'react-router-dom';

const UserProfile = () => {
  const { userId } = useParams();

  return (
    <div>
      <h1>User Profile: {userId}</h1>
    </div>
  );
};

export default UserProfile;
