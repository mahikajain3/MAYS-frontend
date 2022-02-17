import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {useHistory} from 'react-router-dom';

import './badges.css';
import PageTitle from '../../components/PageTitle/PageTitle';
import BadgeItem from '../../components/BadgeItem/BadgeItem';

export default function Badges() {

    const[badges, setBadges] = useState(undefined);
    const [error, setError] = useState(undefined);

    const [refresh, setRefresh] = useState(undefined);

    const history = useHistory();

    

    useEffect(() => {
        axios.get('https://makerspacebadges.herokuapp.com/badges/list')
          .then((response) => {
            // console.log(response.data);
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
                text="Digital Badges"
                />
                <button
                onClick={() => history.push('/')}
                className="button"
                >
                {"<--"}Go Back Home
                </button>
            </div>

            <div className="badges-list">
                {badges && Object.keys(badges).map( (key, index) =>
                    <BadgeItem
                    name={badges[key].badgeName}
                    />

                )}
            </div>
        </div>
    )
}