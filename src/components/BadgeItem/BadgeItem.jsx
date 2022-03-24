import React from 'react';
import {useHistory} from 'react-router-dom';

import './badgeitem.css';
import title from "../../title.png";

export default function BadgeItem({name, aBadge}) {
  const history = useHistory();

    return (
      <div className="badge-item" onClick={() => history.push("/badge-detail", { badge: aBadge})}>
        <p> {name} </p>
      </div>
    );
  }