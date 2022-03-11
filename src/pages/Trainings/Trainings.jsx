import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {useHistory} from 'react-router-dom';
import { backendurl } from '../../config';

import './trainings.css';
import PageTitle from '../../components/PageTitle/PageTitle';

export default function Trainings() {
    const[trainings, setTrainings] = useState(undefined);

    const history = useHistory();

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
        
        </div>
    )

}