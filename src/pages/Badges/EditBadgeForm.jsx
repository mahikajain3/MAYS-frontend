import React, {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { backendurl } from '../../config';

import './editbadgeform.css';
import PageTitle from '../../components/PageTitle/PageTitle';
import axios from 'axios';

export default function EditBadgeForm() {

    const history = useHistory();

    const location = useLocation();
    const {name} = location.state;

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [error, setError] = useState(undefined);
    const [refresh, setRefresh] = useState(undefined);

    const[aBadge, setABadge] = useState(undefined);

    const handleDeleteBadge = () => {
        axios.delete(`${backendurl}/badges/delete/${name}`)
            .then((response) => {
                console.log(response.data);
                history.push('/edit-badge');
            })
            .catch(error => {
                setError(error);
                console.log(error);
            })
    }

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

            <div className ="badge-form">
                <form>
                    <label>
                        Badge Name:
                        <input type="text" name="badge" value={name}/>
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
                        <h1>Delete {name}</h1>
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
            
        </div>
    )
}