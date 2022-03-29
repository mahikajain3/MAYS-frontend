import axios from 'axios';
import React, {useEffect, useState} from 'react';
import { backendurl } from '../../config';

import './badgetable.css';

export default function BadgeTableData({badge:{badgeName, descr}}) {

    const [error, setError] = useState(undefined);

    function refreshPage() {
        window.location.reload(false);
      }

    const handleDeleteBadge = () => {
        axios.delete(`${backendurl}/badges/delete/${badgeName}`)
          .then((response) => {
            console.log(response.data);
            refreshPage();
          })
          .catch(error => {
            setError(error);
            console.log(error);
          })
      }

    return(
        <tr key={badgeName}>
            <td>{badgeName}</td>
            <td>{descr}</td>
            <td></td>
            <td></td>
            <td><button className ="button">Edit</button></td>
            <td><button className ="button" onClick={handleDeleteBadge}>Delete</button></td>
        </tr>
    )

}