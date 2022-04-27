import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { backendurl } from '../../config';

export default function CreateBadgeForm() {

    const[badgeName, setBadgeName] = useState(undefined);

    const [error, setError] = useState(undefined);

    const handleCreateBadge = async () => {
        try {
            await axios.post(`${backendurl}/badges/create/${badgeName}`);
            alert(`${badgeName} created`);
        } catch (error) {
            setError(error);
            console.log(error);
            alert(error.toString());
        }
    }

    const handleSubmit = (event) => {
        handleCreateBadge();
        event.preventDefault();
    }

    return (
        <div className="badge-form">
            <form onSubmit={handleSubmit}>
                <label>
                    Badge Name:
                    <input 
                    type="text" 
                    name="badge" 
                    value={badgeName}
                    onChange={(e) => setBadgeName(e.target.value)}
                    />
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
        </div>

    )
}