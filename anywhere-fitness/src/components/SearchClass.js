// For clients --
// Displays name, time, date, duration, type, intensity, location
// Has reschedule button that renders RescheduleClass
// Has delete button

// For instructors --
// Displays name, time, date, duration, type, intensity, location, current registered attendees, max class size
// Has edit button that renders EditClass
// Has delete button
import React from 'react';

// import axiosWithAuth from '../utils/axiosWithAuth';

const SearchClass = (props) => {

    const { setIsModal, info, clientItems, setClientItems, setModalInfo} = props;
    
    const handleAddClick = () => {
        if (clientItems.classes.some(el => el.id === info.id)) {
            setIsModal(true);
            setModalInfo({
                type: 'success',
                message: 'You are already signed up for this class.', 
                function: null
            });
        } else {
            setIsModal(true);
            setModalInfo({
                type: 'success',
                message: 'You have successfully signed up for this class. You can reschedule or remove this class in your profile.', 
                function: handleAddSubmit
            });
        }
    }

    const handleAddSubmit = () => {
        console.log("Inside handleAddSubmit in SearchClass");
            setClientItems({
                classes: [...clientItems.classes, info],
                punchpasses: [...clientItems.punchpasses]
            });
        // axiosWithAuth()
        //     .post('/api/add-class', info)
        //     .then(res => {
        //         //set class state in my classes to reflect backend change
        //         setClientItems({
        //             classes: [...clientItems.classes, res.data],
        //             punchpasses: [...clientItems.punchpasses]
        //         });
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
            <td><button onClick={handleAddClick}>Sign Up</button></td>
        </tr>
    )
}

export default SearchClass;