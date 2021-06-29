// For clients --
// Displays name, time, date, duration, type, intensity, location
// Has reschedule button that renders RescheduleClass
// Has delete button

// For instructors --
// Displays name, time, date, duration, type, intensity, location, current registered attendees, max class size
// Has edit button that renders EditClass
// Has delete button
import React, { useState } from 'react';

import axiosWithAuth from '../utils/axiosWithAuth';

const SearchClass = (props) => {

    const { setClasses, setIsModal, setTypeModal } = props;
    
    const [cancelModal, setCancelModal] = useState(false);
    const [rescheduleModal, setRescheduleModal] = useState(false);

    const handleAdd = () => {
        setIsModal(true);
        setTypeModal('signUpClass');

        // axiosWithAuth()
        //     .post('/api/add-class', props.info)
        //     .then(res => {
        //         //set class state in my classes to reflect backend change
        //          setClasses(res.data);
        //     })
        //     .catch(err => {
        //         console.log(err)
        //     })
    }

    const { name, time, date, duration, type, intensity, location, current_attendees, class_size } = props.info;
    return (
        <tr className='table-data-row' id='class'>
            <td>{name}</td>
            <td>{time}</td>
            <td>{date}</td>
            <td>{duration}</td>
            <td>{type}</td>
            <td>{intensity}</td>
            <td>{location}</td>
            <td>{current_attendees}</td>
            <td>{class_size}</td>
            <td><button onClick={handleAdd}>Add Class</button></td>
        </tr>
    )
}

export default SearchClass;