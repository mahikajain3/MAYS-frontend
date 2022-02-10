import React from 'react';
import title from '../../title.png';
import demo from '../../badges_demo.png';
import {useHistory} from 'react-router-dom';

export default function Home(){
  const history = useHistory();

  function navigateToPage(path) {
    history.push(path);
  }

  return (
    <div className="header">
      <header>
          <h1><img src={title} alt="title"/></h1>
          <h2>MAYS Design Project</h2>
      </header>


      <div className = "content">
        <img src={demo} alt="demo"/>
      </div>

      <button
        onClick={() => navigateToPage('/rooms')}
        className="page-button"
      >
        View All Badges
      </button>
      <button
        onClick={() => navigateToPage('/users')}
        className="page-button"
      >
        View All Users
      </button> 
    </div>
  );
};

