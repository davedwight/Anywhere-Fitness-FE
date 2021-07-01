// For clients --
// Displays name, time, date, duration, type, intensity, location
// Has reschedule button that renders RescheduleClass
// Has delete button

// For instructors --
// Displays name, time, date, duration, type, intensity, location, current registered attendees, max class size
// Has edit button that renders EditClass
// Has delete button
import React from 'react';

import RescheduleClass from './RescheduleClass';

// import axiosWithAuth from '../utils/axiosWithAuth';

const Class = (props) => {

    const { setIsModal, setModalInfo, clientItems, setClientItems } = props;

    const handleRescheduleClick = () => {
        setIsModal(true);
        setModalInfo({
            type: 'select',
            message: <RescheduleClass 
                setIsModal={setIsModal} 
                setModalInfo={setModalInfo} 
                classInfo={props.info} 
                clientItems={clientItems}
                setClientItems={setClientItems} />,
            function: null
        })
    }

    const handleDeleteClick = () => {
        setIsModal(true);
        props.setTypeModal('cancelClass')
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
            <td><button onClick={handleRescheduleClick}>Reschedule</button></td>
            <td><button onClick={handleDeleteClick}>Delete</button></td>
        </tr>
    )
}

export default Class;