import React, {useEffect, useState} from 'react';
import {useHistory} from 'react-router-dom';

import PageTitle from '../../components/PageTitle/PageTitle';
import BadgeTable from '../../components/BadgeTable/BadgeTable';
import axios from 'axios';
import { backendurl } from '../../config';

export default function EditBadge() {

    const[badges, setBadges] = useState(undefined);
    const[badgeArray, setBadgeArray] = useState([]);
    const [error, setError] = useState(undefined);
    const [refresh, setRefresh] = useState(undefined);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [newBadgeName, setnewBadgeName] = useState('');

    const history = useHistory();

    useEffect(() => {
        axios.get(`${backendurl}/badges/list`)
            .then((response) => {
                if (response.data){
                    setBadges(response.data);
                    setBadgeArray(Object.values(response.data));
                }
            })
            .catch(error => {
                console.log(error);
                setError(error);
            });
    }, [refresh])

    const handleCreateBadge = async () => {
        try {
            await axios.post(`${backendurl}/badges/create/${newBadgeName}`);
            setIsModalOpen(false);
            setRefresh(refresh + 1);
        } catch (error) {
            setError(error);
            console.log(error);
        }
    }

    return (
        <div className="content">
            <div className="badges-header">
                <PageTitle
                text="Edit Badges"
                />
                <button
                onClick={() => history.push('/home')}
                className="button"
                >
                Go Back Home
                </button>
            </div>

            {error && (
                <div className="badges-error-box">
                    <p>{error.toString()}</p>
                </div>
            )}

            {badges ? <BadgeTable badges = {badgeArray}/>  : (
              <div className="badges-empty">
                <p>Sorry there are no badges right now... Come back later </p>
              </div>
            )}

            {isModalOpen && 
                <div className="create-model">
                    <input
                        className="badge-input"
                        placeholder="Badge Name"
                        value={newBadgeName}
                        onChange={(e) => setnewBadgeName(e.target.value)}
                    />
                    <div className="create-actions">
                        <button className="button" onClick={handleCreateBadge}>Create New Badge</button>
                        <button className="button" onClick={() => setIsModalOpen(false)}> Cancel </button>
                    </div>
                </div>
            }

            <div>
                <button className="page-button" onClick={() => setIsModalOpen(true)}> Add New Badge </button>
            </div>
        </div>
        
    )
}