import React from 'react';

import './badgetable.css';
import BadgeTableData from '../../components/BadgeTable/BadgeTableData';

export default function BadgeTable({badges}) {

    console.log(badges);

    return (
        <table>
            <thead>
                <th>Badge</th>
                <th>Description</th>
                <th>Workshops</th>
                <th>Trainings</th>
                <th></th>
                <th></th>
            </thead>
            <tbody>
            {badges && Object.keys(badges).map( (key, index) => (
                <BadgeTableData
                badge={badges[key]}
                />
            ))}
            </tbody>
        </table>
    )
}