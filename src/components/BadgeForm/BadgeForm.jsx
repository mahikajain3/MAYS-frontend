import React, {useState, useEffect} from 'react';
import { backendurl } from '../../config';
import {useHistory} from 'react-router-dom';

import axios from 'axios';

export default function BadgeForm({badge}) {

    const history = useHistory();

    const [error, setError] = useState(undefined);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [newBadgeName, setnewBadgeName] = useState(badge.badgeName);
    const [newDescr, setnewDescr] = useState(badge.description);


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
        handleUpdateBadge();
        event.preventDefault();
        
    }

    const handleUpdateBadge = async () => {
        // CAN ONLY UPDATE BADGE NAME
        try {
            await axios.put(`${backendurl}/badges/update/${badge.badgeName}/${newBadgeName}/${newDescr}`)
            alert("You have submitted the form")
        } catch (error) {
            setError(error);
            console.log(error);
            alert(error.toString());
        }
      }

    return (
        <div className="badge-form">
            <form onSubmit={handleSubmit}>
                <label>
                    Badge Name:
                    <input 
                    type="text" 
                    name="badge" 
                    value={newBadgeName}
                    onChange={(e) => setnewBadgeName(e.target.value)}
                    />
                </label>
                <label>
                    Description:
                    <input 
                    type="text" 
                    name="descr"
                    value={newDescr}
                    onChange={(e) => setnewDescr(e.target.value)}
                    />
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