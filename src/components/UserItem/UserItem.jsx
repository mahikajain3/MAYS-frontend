import React from 'react';

import './useritem.css';

export default function UserItem({name}) {
  return (
    <div className="user-item">
      <p> {name} </p>
    </div>
  );
}