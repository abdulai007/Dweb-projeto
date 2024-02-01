import React from 'react';
import { Link } from 'react-router-dom';  // Adicione esta linha

function Home() {
  return (
    <div>
      <h2>Welcome to the Space Enthusiast Dashboard!</h2>
      <p>Explore upcoming SpaceX launches and save your favorites.</p>
      <Link to="/upcoming">Go to Upcoming Launches</Link>  {/* Adicione esta linha para criar um link para a página de próximos lançamentos */}
    </div>
  );
}

export default Home;
