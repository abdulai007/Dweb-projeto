// src/components/Favorites.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const fetchFavorites = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/favorites');
        setFavorites(response.data);
      } catch (error) {
        console.error('Error fetching favorites:', error.message);
      }
    };

    fetchFavorites();
  }, []);

  return (
    <div>
      <h1>Favorites</h1>
      {/* Renderizar a lista de favoritos */}
    </div>
  );
};

export default Favorites;
