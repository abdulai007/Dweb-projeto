// frontend/src/components/UserProfile.js
import React, { useEffect, useState } from 'react';
import { getFavorites } from '../services/api';

const UserProfile = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const fetchFavorites = async () => {
      try {
        const userFavorites = await getFavorites();
        setFavorites(userFavorites);
      } catch (error) {
        console.error('Error fetching favorites:', error);
      }
    };

    fetchFavorites();
  }, []);

  return (
    <div>
      <h2>User Profile</h2>
      <p>Favorites:</p>
      <ul>
        {favorites.map((favorite) => (
          <li key={favorite}>{favorite}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserProfile;
