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

      <div className="navi">
      </div>
      <div className="page-content">
          <p>The NYU Tandon MakerSpace is a workspace lab created to foster collaborative design projects.
             Space is open to all NYU students, staff, and faculty. It highlights new kinds of iterative,
             interdisciplinary teamwork using cutting-edge tools of rapid prototyping and digitally driven
             production.
          </p>
      </div>

      <button1
        onClick={() => navigateToPage('/badges')}
        className="page-button"
      >
        View All Badges
      </button1>
      <button2
        onClick={() => navigateToPage('/users')}
        className="page-button"
      >
        View All Users
      </button2>
    </div>
    
    
  );
};

