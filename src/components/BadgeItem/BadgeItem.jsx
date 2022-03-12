import React from 'react';

import './badgeitem.css';
import title from "../../title.png";

export default function BadgeItem({name}) {

    return (
      <div className="badge-item">
        <p> {name} </p>
        <></>
      </div>
    );
  }