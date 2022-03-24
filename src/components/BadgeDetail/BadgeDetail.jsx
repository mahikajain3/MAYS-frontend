import React from 'react';
import { useLocation } from 'react-router-dom';
import {useHistory} from 'react-router-dom';

import PageTitle from '../../components/PageTitle/PageTitle';

export default function BadgeDetail() {
  const history = useHistory();
  const location = useLocation();
  const {badge} = location.state;

  console.log(badge);

    return (
      <div className="content">
          <PageTitle
            text= {badge.badgeName}
          />
          <h2>{badge.descr}</h2>
          <div>
            <h3> Requirements </h3>
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