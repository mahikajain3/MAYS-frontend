import React, {useState, useEffect} from 'react';
import { backendurl } from '../../config';
import {useHistory} from 'react-router-dom';

import axios from 'axios';

export default function BadgeForm({badge}) {

    const history = useHistory();

    const [error, setError] = useState(undefined);
    const [isModalOpen, setIsModalOpen] = useState(false);


    const handleDeleteBadge = () => {
        axios.delete(`${backendurl}/badges/delete/${badge.badgeName}`)
            .then((response) => {
                console.log(response.data);
                history.push('/edit-badge');
            })
            .catch(error => {
                setError(error);
                console.log(error);
            })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        alert("You have submitted the form")
    }

    return (
        <div className="badge-form">
            <form onSubmit={handleSubmit}>
                <label>
                    Badge Name:
                    <input type="text" name="badge" value={badge.badgeName}/>
                </label>
                <label>
                    Description:
                    <input type="text" name="descr"/>
                </label>
                <label>
                    Workshops:
                    <input type="text" name="workshops" multiple/>
                </label>
                <label>
                    Trainings:
                    <input type="text" name="trainings" />
                </label>
                <input type="submit" value="Submit" />
            </form>

            {isModalOpen && 
                <div className="create-modal">
                    <div className="create-actions">
                        <h1>Delete {badge.badgeName}</h1>
                        <p>Are you sure you want to delete badge?</p>
                            <button className="button" onClick={handleDeleteBadge}>Delete</button>
                            <button className="button" onClick={() => setIsModalOpen(false)}> Cancel </button>
                    </div>
                </div>
            }
            <div>
                <button className="delete-button" onClick={() => setIsModalOpen(true)}> Delete </button>
            </div>
        </div>
    );
}