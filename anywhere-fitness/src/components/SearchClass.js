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
    
    const punchpassMatch = clientItems.punchpasses.filter(el => el.type === info.type)
    console.log('punchpassMatch: ', punchpassMatch)

    const handleAddClick = () => {
        if (clientItems.classes.some(el => el.id === info.id)) {
            setIsModal(true);
            setModalInfo({
                type: 'success',
                message: 'You are already signed up for this class.', 
                function: null
            });
        // the client has a punchpass of the same type with available punches
        } else if (clientItems.punchpasses.some(el => el.type === info.type) && punchpassMatch.punches_available > punchpassMatch.punches_used) {
            setIsModal(true);
            setModalInfo({
                type: 'confirm',
                message: `This will use a punch on your ${punchpassMatch.type} punchpass. You will have ${(punchpassMatch.punches_available - punchpassMatch.punches_used) - 1} punches remaining.`, 
                function: handleAddSubmit
            });
        // the client has a punchpass of the same type with no available punches
        } else if (clientItems.punchpasses.some(el => el.type === info.type) && punchpassMatch.punches_available === punchpassMatch.punches_used) {
            setIsModal(true);
            setModalInfo({
                type: 'success',
                message: `You have no more punches left on your ${punchpassMatch.type} punchpass. Delete this punchpass and purchase another to sign up for this class.`, 
                function: null
            });
        // the client doesn't have a punchpass of the same type
        } else if (clientItems.punchpasses.some(el => el.type !== info.type)) {
            console.log('info: ', info)
            setIsModal(true);
            setModalInfo({
                type: 'success',
                message: `You don't have a punchpass for ${info.type} classes. Purchase a punch pass to sign up for this class.`, 
                function: null
            });
        } else {
            setIsModal(true);
            setModalInfo({
                type: 'success',
                message: `Sorry, there seems to have been an error.`, 
                function: null
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