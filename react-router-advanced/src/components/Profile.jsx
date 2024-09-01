import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';

const Profile = () => {
  return (
    <div>
      <h1>Profile</h1>
      <ul>
        <li>
          <Link to="/profile/details">Profile Details</Link>
        </li>
        <li>
          <Link to="/profile/settings">Profile Settings</Link>
        </li>
      </ul>

      <Switch>
        <Route path="/profile/details" component={ProfileDetails} />
        <Route path="/profile/settings" component={ProfileSettings} />
      </Switch>
    </div>
  );
};

const ProfileDetails = () => {
  return <div>Profile Details</div>;
};

const ProfileSettings = () => {
  return <div>Profile Settings</div>;
};

export default Profile;
