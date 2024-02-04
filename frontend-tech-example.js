// frontend-tech-example.js

import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // Function to handle user registration
  const handleRegister = async () => {
    try {
      await axios.post('http://localhost:5000/api/register', { username, password }); // Send registration request to the backend
      console.log('User registered successfully');
    } catch (error) {
      console.error('Registration failed', error.response.data.error);
    }
  };

  // Function to handle user login
  const handleLogin = async () => {
    try {
      await axios.post('http://localhost:5000/api/login', { username, password }); // Send login request to the backend
      console.log('Login successful');
    } catch (error) {
      console.error('Login failed', error.response.data.error);
    }
  };

  return (
    <div>
      <h1>Restaurant Reservation System</h1>
      <input type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
      <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleRegister}>Register</button>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default App;
