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
          <div class="subnav">
                <button class="subnavbtn">Badges </button>
                <div class="subnav-content">
                  <a onClick={() => navigateToPage('/badges')}>
                  View All Badges
                   </a>
                   <a onClick={() => navigateToPage('/edit-badge')}>
                  Edit Badges
                   </a>
                   <a onClick={() => navigateToPage('/create-badge')}>
                  Create New Badge
                   </a>
                </div>
          </div>
          <a onClick={() => navigateToPage('/trainings')}>
                View All Trainings
          </a>
          <a onClick={() => navigateToPage('/workshops')}>
                View All Workshops
          </a>
          <a onClick={() => navigateToPage('/users')}>
                View All Users
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

      <div classname = "footer">
          <ul>
              <li><a href="mailto:yw3548@nyu.edu">Email</a></li>
              <li><a href="https://github.com/mahikajain3/MAYS-frontend">Github</a></li>
              <li><a href="https://makerspace.engineering.nyu.edu/">Visit Tandon Makerspace</a></li>
          </ul>
      </div>
    </div>


  );
};

