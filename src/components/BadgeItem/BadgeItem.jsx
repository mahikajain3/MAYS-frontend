import React from 'react';

import './badgeitem.css';

export default function BadgeItem({name}) {

    return (
      <div className="badge-item">
        <p> {name} </p>
          
      </div>
    );
  }