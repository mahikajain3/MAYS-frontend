import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {useHistory} from 'react-router-dom';
import { backendurl } from '../../config';

import './trainings.css';
import PageTitle from '../../components/PageTitle/PageTitle';
import TrainingItem from '../../components/TrainingItem/TrainingItem';

export default function Trainings() {
    const[trainings, setTrainings] = useState(undefined);
    const [error, setError] = useState(undefined);
    const [refresh, setRefresh] = useState(undefined);

    const history = useHistory();

    useEffect(() => {
        axios.get(`${backendurl}/trainings/list`)
          .then((response) => {
            console.log(response.data);
            if (response.data){
              setTrainings(response.data);
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
                text="Trainings"
                />
                <button
                onClick={() => history.push('/')}
                className="button"
                >
                {"<--"}Go Back Home
                </button>
            </div>

            <div className="trainings-list">
              {trainings ? Object.keys(trainings).map( (key, index) => (
                <TrainingItem
                name={trainings[key].trainingName}
                />

              )) : (
                <div className="trainings-empty">
                  <p>Sorry there are no trainings right now... Come back later </p>
                </div>
              )}
            </div>
        
        </div>
    )

}