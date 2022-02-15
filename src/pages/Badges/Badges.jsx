import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {useHistory} from 'react-router-dom';

import './badges.css';
import PageTitle from '../../components/PageTitle/PageTitle';

export default function Badges() {

    const history = useHistory();

    const[badges, setBadges] = useState([
        {id: 1, badgeName: "Design Thinking", descr: "desc1"},
        {id: 2, badgeName: "Digital Craft", descr: "desc2..."},
        {id: 3, badgeName: "Electronics Foundation", descr: "desc1"},
        {id: 4, badgeName: "Hand Craft", descr: "desc1"}
      ]);

    return (
        <div className="content">
            <div className="badges-header">
                <PageTitle
                text="Digital Badges"
                />
                <button
                onClick={() => history.push('/')}
                className="button"
                >
                {"<--"}Go Back Home
                </button>
            </div>

            <div className="badges-list">
                {badges && badges.map( (badge, index) =>
                <div 
                    className="badge-item"
                    key={`${badge.id}-${index}`}
                >
                    <p>{badge.badgeName}</p>
                    <p className="badge-descr">{badge.descr}</p>
                </div>
                )}
            </div>
        </div>
    )
}