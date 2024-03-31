// components/LandingPage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function LandingPage() {
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    // This login system still needs to be created, this is a placeholder.
    navigate('/calendar');
  };

  return (
    <div>
      <h1>Welcome to Our Reservation System</h1>
      <input
        type="text"
        placeholder="Enter username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default LandingPage;
