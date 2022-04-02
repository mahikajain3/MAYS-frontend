import React from 'react';
import {useState, useEffect} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Home from './pages/Home/Home';
import Users from './pages/Users/Users';
import Badges from './pages/Badges/Badges';
import LogIn from "./pages/LogIn/LogIn";
import Trainings from "./pages/Trainings/Trainings";
import Workshops from "./pages/Workshops/Workshops";
import EditBadge from "./pages/Badges/EditBadge";
import EditBadgeForm from "./pages/Badges/EditBadgeForm";
import BadgeDetail from './components/BadgeDetail/BadgeDetail';


import { backendurl } from './config';

import './App.css';


function App() {
  useEffect(() => {
    document.title = "Makerspace NYU Tandon";  
  }, []);
  console.log(backendurl);

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
            <Route exact={true} path={'/badge-detail'}>
              <BadgeDetail />
            </Route>
            <Route exact={true} path={'/login' }>
              <LogIn />
            </Route>
            <Route exact={true} path={'/trainings'}>
              <Trainings />
            </Route>
            <Route exact={true} path={'/workshops'}>
              <Workshops />
            </Route>
            <Route exact={true} path={'/edit-badge'}>
              <EditBadge />
            </Route>
            <Route exact={true} path={'/edit-badge-form'}>
              <EditBadgeForm />
            </Route>
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
