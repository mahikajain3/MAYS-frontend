import React from 'react';
import title from "../../title.png";

import './pagetitle.css';

export default function PageTitle({text}) {
  return (
    <header>
          <h1><img src={title} alt="title"/></h1>
    </header>
  );
}


