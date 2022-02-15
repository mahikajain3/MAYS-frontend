import React from 'react';

import './badgeitem.css';

export default function BadgeItem({badge, descr}) {

    return (
      <div className="badge-item">
        <p> {badge} </p>
        <p> {descr} </p>
      </div>
    );
  }