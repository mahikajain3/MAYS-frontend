import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {useHistory} from 'react-router-dom';

import './workshops.css';
import PageTitle from '../../components/PageTitle/PageTitle';
import WorkshopItem from '../../components/WorkshopItem/WorkshopItem';
import { backendurl } from '../../config';

export default function Workshops() {

    const [workshops, setWorkshops] = useState(undefined);
    const [error, setError] = useState(undefined);

    const [refresh, setRefresh] = useState(undefined);

    const history = useHistory();

    useEffect( () => {
        axios.get(`${backendurl}/workshops/list`)
            .then( (response) => {
                console.log(response.data);
                if (response.data) {
                    setWorkshops(response.data);
                }
            })
            .catch( error => {
                console.log(error);
                setError(error);
            });
    }, [refresh])

    return (
        <div className="content">
            <div className="workshops-header">
                <PageTitle
                text="Workshops"
                />
                <button onClick={ () => history.push('/')}
                className="button"
                >
                {"<--"}Go Back Home
                </button>
            </div>

            <div className="workshops-list">
                {workshops ? Object.keys(workshops).map( (key, index) => (
                    <WorkshopItem
                    name={workshops[key].workshopName}
                    />
                )) : (
                    <div className="workshops-empty">
                        <p> Sorry there are no workshops right now... Come back later</p>
                    </div>
                )}
            </div>
        </div>
        
    )

}