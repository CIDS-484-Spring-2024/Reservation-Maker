// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginPage from './LoginPage';
import Calendar from './Calendar';
import ReservationList from './ReservationList';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" exact component={LoginPage} />
          <Route path="/calendar" component={Calendar} />
          <Route path="/reservations" component={ReservationList} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
