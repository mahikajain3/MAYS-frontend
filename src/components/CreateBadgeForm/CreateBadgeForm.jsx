import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { backendurl } from '../../config';

export default function CreateBadgeForm() {

    const[badgeName, setBadgeName] = useState(undefined);
    const[trainingList, setTrainingList] = useState(undefined);
    const[workshopList, setWorkshopList] = useState(undefined);
    const[descr, setDescr] = useState(undefined);

    const [error, setError] = useState(undefined);

    const handleCreateBadge = async () => {
        try {
            if (badgeName == undefined) throw new Error("badge undefined!");
            if (descr == undefined) throw new Error("description undefined!");
            await axios.post(`${backendurl}/badges/create/${badgeName}/${trainingList}/${workshopList}/${descr}`);
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
                    <input 
                    type="text" 
                    name="descr"
                    onChange={(e) => setDescr(e.target.value)}
                    />
                </label>
                <label>
                    Workshops:
                    <input 
                    type="text" 
                    name="workshops" 
                    onChange={(e) => setWorkshopList(e.target.value)}
                    />
                </label>
                <label>
                    Trainings:
                    <input 
                    type="text" 
                    name="trainings" 
                    onChange={(e) => setTrainingList(e.target.value)}
                    />
                </label>
                <input type="submit" value="Submit" />
            </form>
        </div>

    )
}