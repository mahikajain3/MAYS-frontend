import React from 'react';

import PageTitle from '../../components/PageTitle/PageTitle';

export default function BadgeDetail({name, descr}) {

    return (
      <div className="badge-item-detail">
          <PageTitle
            text= {name}
          />
          <h2>{descr}</h2>
          <div>
            <h3> Requirements </h3>
            <p>Workshops:</p>
            <p>Trainings:</p>
          </div>
          
      </div>

    );
  }