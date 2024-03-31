// components/ReservationsPage.js
import React from 'react';
import { useLocation } from 'react-router-dom';

function ReservationsPage() {
  const location = useLocation();
  const { reservations } = location.state || { reservations: [] };

  return (
    <div>
      <h1>Your Reservations</h1>
      <ul>
        {reservations.length > 0 ? (
          reservations.map((reservation, index) => (
            <li key={index}>Day: {reservation}</li>
          ))
        ) : (
          <p>No reservations made.</p>
        )}
      </ul>
    </div>
  );
}

export default ReservationsPage;
