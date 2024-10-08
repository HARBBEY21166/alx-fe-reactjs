import React, { useState } from 'react';
import axios from 'axios';
import githubService from '../services/githubService'; // Adjust the path as necessary

function Search() {
  const [username, setUsername] = useState('');
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const data = await githubService.fetchUserData(username);
      setUserData(data);
    } catch (err) {
      setError("Looks like we cant find the user");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter GitHub username"
          required
        />
        <button type="submit">Search</button>
      </form>
      
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {userData && (
        <div>
          <img src={userData.avatar_url} alt={userData.login} />
          <h2>{userData.login}</h2>
          {results.length > 0 && (
          <ul>
            {results.map((user) => (
              <li key={user.id}>
                <img src={user.avatar_url} alt={user.login} width="50" />
                <p>{user.login}</p>
                <p>Location: {user.location ? user.location : "Not available"}</p>
                <a href={user.html_url} target="_blank" rel="noopener noreferrer">
                  View Profile
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Search;
