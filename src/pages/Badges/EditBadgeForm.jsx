import React from 'react';
import {useHistory} from 'react-router-dom';
import { useLocation } from 'react-router-dom';

import PageTitle from '../../components/PageTitle/PageTitle';

export default function EditBadgeForm() {

    const history = useHistory();

    const location = useLocation();
    const {name} = location.state;


    return (
        <div className="content">
            <div className="badges-header">
                <PageTitle
                text={name}
                />
                <button
                onClick={() => history.push('/edit-badge')}
                className="button"
                >
                Go Back
                </button>
            </div>
        </div>
    )
}