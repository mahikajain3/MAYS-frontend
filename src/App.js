import React from 'react';
import {useState, useEffect} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Home from './pages/Home/Home';
import Rooms from './pages/Rooms/Rooms';
import Users from './pages/Users/Users';
import Badges from './pages/Badges/Badges';

import './App.css';

function App() {
  return (
    <div className="root">
      <div className="content">
        <Router>
          <Switch>
            <Route exact={true} path={'/'}>
              <Home />
            </Route>
            <Route exact={true} path={'/badges'}>
              <Badges />
            </Route>
            <Route exact={true} path={'/users'}>
              <Users />
            </Route>
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
