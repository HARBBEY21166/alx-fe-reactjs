import React from 'react';
import { BrowserRouter, Route, Switch, Routes } from 'react-router-dom';
import Profile from './Profile';
import ProtectedRoute from './ProtectedRoute';
import Login from './Login';
import UserProfile from './UserProfile';
import BlogPost from './BlogPost';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <ProtectedRoute path="/profile" element={<Profile />} />
        <Route path="/users/:userId" element={<UserProfile />} />
        <Route path="/blog/:postId" element={<BlogPost />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
