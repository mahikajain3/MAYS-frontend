import React from 'react';
import title from "../../title.png";

import './pagetitle.css';

export default function PageTitle({text}) {
  return (
    <div className="pagetitle-header">
          <h1><img src={title} alt="title"/></h1>
          <h1 className="title">{text}</h1>
    </div>
  );
}


