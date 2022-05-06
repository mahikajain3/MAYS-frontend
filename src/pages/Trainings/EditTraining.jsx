import React, {useEffect, useState} from 'react';
import {useHistory} from 'react-router-dom';
import axios from 'axios';

import { backendurl } from '../../config';
import PageTitle from '../../components/PageTitle/PageTitle';
import TrainingTable from '../../components/TrainingTable/TrainingTable';

export default function EditTraining() {

    const [trainings, setTrainings] = useState(undefined);
    const [trainingArray, setTrainingArray] = useState([]);

    const [error, setError] = useState(undefined);
    const [refresh, setRefresh] = useState(undefined);
    const history = useHistory();

    useEffect(() => {
        axios.get(`${backendurl}/trainings/list`)
          .then((response) => {
            if (response.data){
              setTrainings(response.data);
              setTrainingArray(Object.values(response.data));
            }
          })
          .catch(error => {
            console.log(error);
            setError(error);
          });
    }, [refresh])

    return (
        <div className="content">
            <div className="trainings-header">
                <PageTitle
                text="Edit Trainings"
                />
                <button
                onClick={() => history.push('/home')}
                className="button"
                >
                Go Back Home
                </button>
            </div>

            {error && (
                <div className="trainings-error-box">
                    <p>{error.toString()}</p>
                </div>
            )}

            {trainings ? <TrainingTable trainings = {trainingArray}/>  : (
              <div className="trainings-empty">
                <p>Sorry there are no badges right now... Come back later </p>
              </div>
            )}

        </div>

    )
}