import React from 'react';


import './workshopitem.css';

export default function WorkshopItem({name}) {
    return (
        <div className="workshop-item">
            <p>{name}</p>
        </div>
    )
}