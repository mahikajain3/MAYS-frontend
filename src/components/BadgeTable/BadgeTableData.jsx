import React from 'react';

import './badgetable.css';

export default function BadgeTableData({badge:{badgeName, descr}}) {
    return(
        <tr key={badgeName}>
            <td>{badgeName}</td>
            <td>{descr}</td>
            <td>default training</td>
            <td>default workshop</td>
            <td><button>Edit</button></td>
            <td><button>Delete</button></td>
        </tr>
    )

}