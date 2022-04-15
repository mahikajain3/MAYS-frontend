import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {useHistory} from 'react-router-dom';
import { backendurl } from '../../config';

import './users.css';
import PageTitle from '../../components/PageTitle/PageTitle';
import UserItem from '../../components/UserItem/UserItem';

export default function Users() {
  const [users, setUsers] = useState(undefined);
  const [error, setError] = useState(undefined);

  const [refresh, setRefresh] = useState(0);

  const history = useHistory();

  useEffect(() => {
    axios.get(`${backendurl}/users/list`)
      .then((response) => {
        if (response.data){
          setUsers(response.data);
        }
      })
      .catch(error => {
        setError(error);
        console.log(error);
      });
  }, [refresh])

  return (
    <div className="content">
      <div className="users-header">
        <PageTitle
        text="Users"
        />
        <button
        onClick={() => history.push('/home')}
        className="button"
        >
        Go Back Home
        </button>
      </div>

      <div className="users-list">
        {users ? Object.keys(users).map( (key, index) => (
          <UserItem
          name={users[key].userName}
          />
        )) : (
          <div className="users-empty">
            <p>Sorry there are no users right now... Come back later </p>
          </div>
        )} 
      </div>
    </div>
  )
}
