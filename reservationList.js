// ReservationList.js
import React from 'react';

function ReservationList() {
  // Sample reservation data
  const reservations = [
    { id: 1, date: '2024-03-03', time: '10:00 AM', name: 'John Doe' },
    { id: 2, date: '2024-03-04', time: '11:00 AM', name: 'Jane Smith' },
    { id: 3, date: '2024-03-05', time: '12:00 PM', name: 'Alice Johnson' },
    // Add more reservations as needed
  ];

  return (
    <div>
      <h2>Reservation List</h2>
      <ul>
        {reservations.map((reservation) => (
          <li key={reservation.id}>
            <strong>Date:</strong> {reservation.date}, <strong>Time:</strong> {reservation.time}, <strong>Name:</strong> {reservation.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ReservationList;
