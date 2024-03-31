// components/CalendarPage.js
// Incomplete - planning on using date-fns or moment libraries to handle the calendar
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function CalendarPage() {
  const navigate = useNavigate();
  // Simple placeholder dates for the example
  const dates = ['1', '2', '3', '4', '5'];
  const [reservations, setReservations] = useState([]);

  const makeReservation = (day) => {
    setReservations([...reservations, day]);
    navigate('/reservations');
  };

  return (
    <div>
      <h1>Choose a day for your reservation</h1>
      <div>
        {dates.map((day) => (
          <button key={day} onClick={() => makeReservation(day)}>
            {day}
          </button>
        ))}
      </div>
    </div>
  );
}

export default CalendarPage;
