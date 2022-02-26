import React from 'react';
import title from '../../title.png';
import {useHistory} from 'react-router-dom';

import './home.css';

export default function Home(){
  const history = useHistory();

  function navigateToPage(path) {
    history.push(path);
  }

  return (
    <div className="header">
      <header>
          <h1><img src={title} alt="title"/></h1>
      </header>

      <div className = "navi-bar">
          <a className="active" href="#home">Home</a>
          <a onClick={() => navigateToPage('/badges')}>
                View All Badges
          </a>
          <a onClick={() => navigateToPage('/users')}>
                View All Users
          </a>
          <a onClick={() => navigateToPage('/login')}>
                Log In
          </a>
      </div>

      <div className="theme-pic">
      </div>

      <div className="page-content">
          <p>The NYU Tandon MakerSpace is a workspace lab created to foster collaborative design projects.
             Space is open to all NYU students, staff, and faculty. It highlights new kinds of iterative,
             interdisciplinary teamwork using cutting-edge tools of rapid prototyping and digitally driven
             production.
          </p>
      </div>
    </div>

    
  );
};

