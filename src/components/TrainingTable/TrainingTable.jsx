import React from 'react';
import {useHistory} from 'react-router-dom';

import './trainingtable.css';

export default function TrainingTable({trainings}) {

    const history = useHistory();

    return (
        <table>
            <thead>
                <th>Training</th>
                <th></th>
            </thead>
            <tbody>
            {trainings && trainings.map((training, index) => (
                <tr key={`${training.roomName}-${index}`}>
                    <td>{training.trainingName}</td>
                    <td><button className ="button" onClick={() => history.push("/edit-training-form", { name: training.trainingName})}>Edit</button></td>
                </tr>
            ))}
            </tbody>
        </table>
        
    )
}