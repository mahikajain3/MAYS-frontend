import React, {useEffect, useState} from 'react';
import { useLocation } from 'react-router-dom';
import {useHistory} from 'react-router-dom';
import axios from 'axios';
import { backendurl } from '../../config';

import PageTitle from '../../components/PageTitle/PageTitle';
import BadgeDetail from '../../components/BadgeDetail/BadgeDetail';

export default function BadgeDetailPage() {
    const history = useHistory();
    const location = useLocation();
    const {badgeName} = location.state;

    const[aBadge, setABadge] = useState(undefined);

    const [error, setError] = useState(undefined);
    const [refresh, setRefresh] = useState(undefined);

    useEffect(() => {
        axios.get(`${backendurl}/badges/list/${badgeName}`)
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
            {aBadge ? 
                <BadgeDetail
                name = {aBadge.badgeName}
                descr = {aBadge.description}
                />
            : (
                <div className="badges-empty">
                    <p>Sorry there are no badges right now... Come back later </p>
                </div>
            )}

            {error && (
            <div className="badge-error-box">
              <p>{error.toString()}</p>
            </div>
            )}

            <button
            onClick={() => history.push('/badges')}
            className="button"
            >
            {"<--"}Go Back
            </button>

        </div>
    )
}