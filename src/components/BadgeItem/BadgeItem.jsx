import React from 'react';

import './badgeitem.css';

export default function BadgeItem({badge, descr}) {
    const[badges, setBadges] = useState([
        {id: 1, badgeName: "Design Thinking", descr: "desc1"},
        {id: 2, badgeName: "Digital Craft", descr: "desc2..."}
      ]);

    return (
      <div className="badge-item">
        <p> {badge} </p>
        <p> {descr} </p>
      </div>
    );
  }