import React from 'react';
import {useHistory} from 'react-router-dom';

import PageTitle from '../../components/PageTitle/PageTitle';

export default function EditTraining() {

    const history = useHistory();

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
        </div>

    )
}