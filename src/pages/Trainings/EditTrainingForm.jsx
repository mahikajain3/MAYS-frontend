import React, {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { backendurl } from '../../config';

import './edittrainingform.css';
import PageTitle from '../../components/PageTitle/PageTitle';
import TrainingForm from '../../components/TrainingForm/TrainingForm';

export default function EditTrainingForm() {

    const history = useHistory();

    const location = useLocation();
    const {name} = location.state; // this is training name

    const [error, setError] = useState(undefined);
    const [refresh, setRefresh] = useState(undefined);


    return (
        <div className="content">
            <div className="badges-header">
                <PageTitle
                text="Edit Trainings"
                />
                <button
                onClick={() => history.push('/edit-training')}
                className="button"
                >
                Go Back
                </button>
            </div>


            {
            <TrainingForm
            trainingName={name}
            />
            }
            
        </div>
    )
}