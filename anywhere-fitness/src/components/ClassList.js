// Nested inside Profile
// Displays a list of Class components
import React from 'react';

import Class from './Class';

const ClassList = (props) => {

    const { classes, setTypeModal, setIsModal } = props;

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
                {classes.map(c => (
                    <Class key={c.id} info={c} setTypeModal={setTypeModal} setIsModal={setIsModal}/>
                ))}
                </tbody>
            </table>
        </div>
    )
}

export default ClassList;