import React, {useEffect, useState} from 'react';
import {useHistory} from 'react-router-dom';

import PageTitle from '../../components/PageTitle/PageTitle';
import BadgeTable from '../../components/BadgeTable/BadgeTable';
import axios from 'axios';
import { backendurl } from '../../config';

export default function EditBadge() {

    const[badges, setBadges] = useState(undefined);
    const [error, setError] = useState(undefined);
    const [refresh, setRefresh] = useState(undefined);

    const history = useHistory();

    useEffect(() => {
        axios.get(`${backendurl}/badges/list`)
            .then((response) => {
                if (response.data){
                    setBadges(response.data);
                }
            })
            .catch(error => {
                console.log(error);
                setError(error);
            });
    }, [refresh])

    return (
        <div className="content">
            <div className="badges-header">
                <PageTitle
                text="Edit Badges"
                />
                <button
                onClick={() => history.push('/')}
                className="button"
                >
                Go Back Home
                </button>
            </div>
            
            <BadgeTable badges = {badges}/>
        </div>
        
    )
}