import React from 'react';
import {useHistory} from 'react-router-dom';
import { useLocation } from 'react-router-dom';

import PageTitle from '../../components/PageTitle/PageTitle';

export default function EditBadgeForm() {

    const history = useHistory();

    const location = useLocation();
    const {name} = location.state;


    return (
        <div className="content">
            <div className="badges-header">
                <PageTitle
                text={name}
                />
                <button
                onClick={() => history.push('/edit-badge')}
                className="button"
                >
                Go Back
                </button>
            </div>

            <form>
                <label>
                    Badge Name:
                    <input type="text" name="name" />
                </label>
                <label>
                    Description:
                    <input type="text" name="name" />
                </label>
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}