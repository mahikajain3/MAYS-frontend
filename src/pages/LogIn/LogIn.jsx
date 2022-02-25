import React from 'react';
import title from '../../title.png';
import {useHistory} from 'react-router-dom';

import "./login.css";

export default function LogIn(){
  const history = useHistory();

  function navigateToPage(path) {
    history.push(path);
  }

  return (
    <div className="header">
      <header>
          <h1><img src={title} alt="title"/></h1>
      </header>
    </div>
  );
};