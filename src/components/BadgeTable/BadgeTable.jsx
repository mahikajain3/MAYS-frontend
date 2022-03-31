import React from 'react';

import './badgetable.css';

export default function BadgeTable({badges}) {

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
            {badges && badges.map((badge, index) => (
                <tr key={`${badge.roomName}-${index}`}>
                    <td>{badge.badgeName}</td>
                    <td>{badge.descr}</td>
                    <td></td>
                    <td></td>
                    <td><button className ="button">Edit</button></td>
                    <td><button className ="button">Delete</button></td>
                </tr>
            ))}
            </tbody>
        </table>
    )
}