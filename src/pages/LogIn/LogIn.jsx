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

      <div className = "login">
        <form id="login" method="get" action="login.php">
            <label><b>User Name</b></label>
            <input type="text" name="Uname" id="Uname" placeholder="User name">
            </input>
            <label><b>Password</b></label>
            <input type="text" name="Uname" id="Uname" placeholder="Password">
            </input>
            <input type="button" onClick={() => history.push('/home')} name="log" id="log" value="Log In">
            </input>

        </form>
      </div>


    </div>
  );
};