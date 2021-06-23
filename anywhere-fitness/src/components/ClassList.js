// Nested inside Profile
// Displays a list of Class components
import React from 'react';

import Class from './Class';

const ClassList = (props) => {
    return (
        <div className='container'>
            <table>
                <tbody>
                <tr className='table-header-row'>
                    <th>Name</th>
                    <th>Time</th>
                    <th>Date</th>
                    <th>Duration</th>
                    <th>Type</th>
                    <th>Intensity</th>
                    <th>Location</th>
                    <th>Current Attendees</th>
                    <th>Max Attendees</th>
                </tr>
                {props.classes.map(c => (
                    <Class key={c.id} info={c}/>
                ))}
                </tbody>
            </table>
        </div>
    )
}

export default ClassList;