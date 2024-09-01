import React from 'react';
import { Routes, Route, Link } from 'react-router-dom'; // Import Link from react-router-dom

const Profile = () => {
  return (
    <div>
      <h2>Profile</h2>
      <nav>
        <ul>
          <li>
            <Link to="/profile/details">Details</Link>
          </li>
          <li>
            <Link to="/profile/settings">Settings</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="details" element={<ProfileDetails />} /> 
        <Route path="settings" element={<ProfileSettings />} /> 
      </Routes>
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