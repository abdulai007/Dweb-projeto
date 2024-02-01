// frontend/src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import './App.css';

import Home from './pages/Home';  
import LaunchList from './components/LaunchList';
import LaunchDetails from './pages/LaunchDetails';
import UserFavorites from './pages/UserFavorites';
import Login from './pages/Login'; // Importe a página de login

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Space Enthusiast Dashboard</h1>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/launches">Launches</Link>
              </li>
              <li>
                <Link to="/favorites">Favorites</Link>
              </li>
              <li>
                <Link to="/login">Login</Link> {/* Adicione esta linha para a página de login */}
              </li>
            </ul>
          </nav>
        </header>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/launches" component={LaunchList} />
          <Route path="/launches/:id" component={LaunchDetails} />
          <Route path="/favorites" component={UserFavorites} />
          <Route path="/login" component={Login} /> {/* Adicione esta linha para a página de login */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
