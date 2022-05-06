import React, {useState, useEffect} from 'react';
import { backendurl } from '../../config';
import {useHistory} from 'react-router-dom';

import axios from 'axios';

export default function TrainingForm({trainingName}) {

    const history = useHistory();


    const [error, setError] = useState(undefined);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [newTrainingName, setnewTrainingName] = useState(undefined);

    const handleUpdateTraining = () => {
        axios.put(`${backendurl}/trainings/update/${trainingName}/${newTrainingName}`)
          .then(() => {
            alert("You have submitted the form")
          })
          .catch(error => {
            setError(error);
            console.log(error);
          })
      }

    const handleSubmit = (event) => {
        handleUpdateTraining();
        event.preventDefault();
    }


    return (
        <div className="training-form">
            <form onSubmit={handleSubmit}>
                <label>
                    Training Name:
                    <input 
                    type="text" 
                    name="oldname"
                    value={trainingName}
                    />
                </label>
                <label>
                    New Training Name:
                    <input 
                    type="text" 
                    name="badge" 
                    value={newTrainingName}
                    onChange={(e) => setnewTrainingName(e.target.value)}
                    />
                </label>
                <input type="submit" value="Submit" />
            </form>

            
        </div>
    );
}