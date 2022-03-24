import React from 'react';
import { useLocation } from 'react-router-dom';
import {useHistory} from 'react-router-dom';

import PageTitle from '../../components/PageTitle/PageTitle';

export default function BadgeDetail() {
  const history = useHistory();
  const location = useLocation();
  const {badgeName} = location.state;
  const {data} = location.state;

  console.log(data);

    return (
      <div className="content">
          <PageTitle
            text= {badgeName}
          />
          <h2>A description of the badge...</h2>
          <div>
            <p>Workshops:</p>
            <p>Trainings:</p>
          </div>

          <button
            onClick={() => history.push('/badges')}
            className="button"
            >
            {"<--"}Go Back
          </button>
          
      </div>

    );
  }