// frontend/src/components/LaunchList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const LaunchList = () => {
  const [launches, setLaunches] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLaunches = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/launches/upcoming');
        setLaunches(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching launches:', error);
        setLoading(false);
      }
    };

    fetchLaunches();
  }, []);

  if (loading) {
    return <p>Loading launches...</p>;
  }

  return (
    <div>
      <h2>Upcoming Launches</h2>
      <ul>
        {launches.map((launch) => (
          <li key={launch.id}>{launch.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default LaunchList;
