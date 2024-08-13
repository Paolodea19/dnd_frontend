// src/App.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import MonsterCard from './components/MonsterCard';
import Register from './components/Register';
import Login from './components/Login';

function App() {
  const [monsters, setMonsters] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isRegistering, setIsRegistering] = useState(false);
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  useEffect(() => {
    if (isAuthenticated) {
      const fetchMonsters = async () => {
        const token = localStorage.getItem('token');
        if (!token) {
          setIsAuthenticated(false);
          return;
        }
        try {
          const response = await axios.get('/api/monsters', {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          setMonsters(response.data);
        } catch (error) {
          console.error("Error fetching monsters!", error);
        }
      };

      fetchMonsters();
    }
  }, [isAuthenticated]);

  const handleLogin = () => {
    setIsAuthenticated(true);
    setIsLoggingIn(false);
    setIsRegistering(false);
  };

  const handleRegister = () => {
    setIsRegistering(false);
    setIsLoggingIn(true);
  };

  return (
    <div className="App">
      {!isAuthenticated ? (
        <>
          {isRegistering ? (
            <Register onRegister={handleRegister} />
          ) : isLoggingIn ? (
            <Login onLogin={handleLogin} />
          ) : (
            <div>
              <button onClick={() => setIsRegistering(true)}>Register</button>
              <button onClick={() => setIsLoggingIn(true)}>Login</button>
            </div>
          )}
        </>
      ) : (
        <div>
          <h1>Monsters</h1>
          <div className="monster-grid">
            {monsters.map((monster) => (
              <MonsterCard key={monster.id} monster={monster} />
            ))}
          </div>
          <button onClick={() => {
            localStorage.removeItem('token');
            setIsAuthenticated(false);
          }}>Logout</button>
        </div>
      )}
    </div>
  );
}

export default App;

