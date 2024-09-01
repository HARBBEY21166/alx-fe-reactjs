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
      <Switch>
        <Route path="/login" component={Login} />
        <ProtectedRoute path="/profile" component={Profile} />
        <Route path="/users/:userId" component={UserProfile} />
        <Route path="/blog/:postId" component={BlogPost} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
