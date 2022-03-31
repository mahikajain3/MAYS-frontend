import React from 'react';
import {useHistory} from 'react-router-dom';

import './badgetable.css';

export default function BadgeTable({badges}) {

    const history = useHistory();

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
                    <td><button className ="button" onClick={() => history.push("/edit-badge-form", { name: badge.badgeName})}>Edit</button></td>
                    <td><button className ="button">Delete</button></td>
                </tr>
            ))}
            </tbody>
        </table>
    )
}