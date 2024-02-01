import React, { useState, useEffect } from 'react';
import axios from 'axios';

const LaunchList = () => {
  const [launches, setLaunches] = useState([]);

  useEffect(() => {
    const fetchLaunches = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/launches/upcoming');
        setLaunches(response.data);
      } catch (error) {
        console.error('Error fetching launches:', error.message);
      }
    };

    fetchLaunches();
  }, []);

  return (
    <div>
      <h1>Upcoming Launches</h1>
      {launches.length > 0 ? (
        <ul>
          {launches.map((launch) => (
            <li key={launch.id}>
              <h3>{launch.name}</h3>
              <p>Mission Date: {new Date(launch.date_utc).toLocaleDateString()}</p>
              <p>Rocket: {launch.rocket}</p>
              {/* Adicione mais informações conforme necessário */}
            </li>
          ))}
        </ul>
      ) : (
        <p>No upcoming launches</p>
      )}
    </div>
  );
};

export default LaunchList;
