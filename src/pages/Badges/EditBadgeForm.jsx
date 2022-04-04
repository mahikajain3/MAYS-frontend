import React from 'react';
import {useHistory} from 'react-router-dom';
import { useLocation } from 'react-router-dom';

import './editbadgeform.css';
import PageTitle from '../../components/PageTitle/PageTitle';

export default function EditBadgeForm() {

    const history = useHistory();

    const location = useLocation();
    const {name} = location.state;


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
            </div>
            
        </div>
    )
}