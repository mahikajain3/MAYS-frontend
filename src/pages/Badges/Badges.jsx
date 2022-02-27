import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {useHistory} from 'react-router-dom';
import { backendurl } from '../../config';

import './badges.css';
import PageTitle from '../../components/PageTitle/PageTitle';
import BadgeItem from '../../components/BadgeItem/BadgeItem';

export default function Badges() {

    const[badges, setBadges] = useState(undefined);
    const [error, setError] = useState(undefined);

    const [refresh, setRefresh] = useState(undefined);
    const history = useHistory();

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [newBadgeName, setnewBadgeName] = useState('');

    function navigateToPage(path) {
      history.push(path);
    }

    useEffect(() => {
        axios.get(`${backendurl}/badges/list`)
          .then((response) => {
            console.log(response.data);
            if (response.data){
              setBadges(response.data);
            }
          })
          .catch(error => {
            console.log(error);
            setError(error);
          });
    }, [refresh])

    const handleCreateBadge = () => {
      axios.post(`${backendurl}/badges/create/${newBadgeName}`)
        .then(() => {
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

            <div className="badges-header">
                <PageTitle
                text="Digital Badges"
                />
                <button
                onClick={() => history.push('/')}
                className="button"
                >
                {"<--"}Go Back Home
                </button>
            </div>

            <div className="badges-list" onClick={() => navigateToPage('/badge-detail')}>
                {badges && Object.keys(badges).map( (key, index) =>
                    <BadgeItem
                    name={badges[key].badgeName}
                    />

                )}
            </div>

            <div>
              <button className="page-button" onClick={() => setIsModalOpen(true)}> Add New Badge </button>
            </div>
        </div>
    )
}