import React, {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { backendurl } from '../../config';

import './editbadgeform.css';
import PageTitle from '../../components/PageTitle/PageTitle';
import BadgeForm from '../../components/BadgeForm/BadgeForm';
import axios from 'axios';

export default function EditBadgeForm() {

    const history = useHistory();

    const location = useLocation();
    const {name} = location.state;

    const [error, setError] = useState(undefined);
    const [refresh, setRefresh] = useState(undefined);

    const[aBadge, setABadge] = useState(undefined);


    useEffect(() => {
        axios.get(`${backendurl}/badges/list/${name}`)
          .then((response) => {
            console.log(response.data);
            if (response.data){
                setABadge(response.data);
            }
          })
          .catch(error => {
            console.log(error);
          });
    } , [refresh])

    return (
        <div className="content">
            <div className="badges-header">
                <PageTitle
                text="Edit Badges"
                />
                <button
                onClick={() => history.push('/edit-badge')}
                className="button"
                >
                Go Back
                </button>
            </div>

            {aBadge && 
            <BadgeForm
            badge={aBadge}
            />
            }

            
        </div>
    )
}