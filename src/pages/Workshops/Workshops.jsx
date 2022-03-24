import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {useHistory} from 'react-router-dom';
import { backendurl } from '../../config';

import './workshops.css';
import PageTitle from '../../components/PageTitle/PageTitle';
import WorkshopItem from '../../components/WorkshopItem/WorkshopItem';


export default function Workshops() {

    const [workshops, setWorkshops] = useState(undefined);
    const [error, setError] = useState(undefined);
    const [newWorkshopName, setnewWorkshopName] = useState('');

    const [refresh, setRefresh] = useState(undefined);
    const [isModalOpen, setIsModalOpen] = useState(false);

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

    const handleCreateWorkshop = () => {
        axios.post(`${backendurl}/workshops/create/${newWorkshopName}`)
            .then( () => {
                setIsModalOpen(false);
                setRefresh(refresh + 1);
            })
            .catch(error => {
                setError(error);
                console.log(error);
            })
    }

    return (
        <div className="content">
            {isModalOpen &&
                <div className="create-modal">
                    <input
                    className="workshop-input"
                    placeholder="Workshop Name"
                    value={newWorkshopName}
                    onChange={ (e) => setnewWorkshopName(e.target.value)}
                    />
                    <div className="create-actions">
                        <button className="button" onClick={handleCreateWorkshop}>Create New Workshop</button>
                        <button className="button" onClick={() => setIsModalOpen(false)}>Cancel</button>
                    </div>
                </div>
            }
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

            <div>
                <button className="page-button" onClick={() => setIsModalOpen(true)}> Add New Workshop </button>
            </div>
        </div>
        
    )

}