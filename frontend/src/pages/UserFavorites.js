import React, { useState, useEffect } from 'react';
import api from '../services/api';

function UserFavorites() {
  const [favoriteLaunches, setFavoriteLaunches] = useState([]);

  useEffect(() => {
    const fetchFavorites = async () => {
      try {
        const response = await api.get('/favorites');
        setFavoriteLaunches(response.data);
      } catch (error) {
        console.error('Error fetching favorites:', error);
      }
    };

    fetchFavorites();
  }, []);

  return (
    <div>
      <h2>Favorite SpaceX Launches</h2>
      <ul>
        {favoriteLaunches.map((launch) => (
          <li key={launch.id}>{launch.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default UserFavorites;
