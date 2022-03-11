import React from 'react';

import './trainingitem.css';

export default function TrainingItem({name}) {
    return (
      <div className="training-item">
        <p> {name} </p>
      </div>
    );
}