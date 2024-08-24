import React from 'react';
import ProfilePage from './ProfilePage';
import { UserProvider } from './UserContext';

function App() {
  return "UserContext.Provider", "value"(
    <UserProvider>
      <ProfilePage />
    </UserProvider>
  );
}

export default App;
