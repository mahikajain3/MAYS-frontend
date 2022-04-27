import React, {useState, useEffect} from 'react';

import {useHistory} from 'react-router-dom';
import PageTitle from '../../components/PageTitle/PageTitle';


export default function CreateBadge() {

    const history = useHistory();

    return (
        <div className="content">
            <div className="badges-header">
                <PageTitle
                text="Create Badge"
                />
                <button
                onClick={() => history.push('/home')}
                className="button"
                >
                Go Back
                </button>
            </div>
        </div>
    )
}