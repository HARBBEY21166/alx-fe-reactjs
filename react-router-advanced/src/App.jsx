import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Profile from './Profile';
import ProtectedRoute from './ProtectedRoute';

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
