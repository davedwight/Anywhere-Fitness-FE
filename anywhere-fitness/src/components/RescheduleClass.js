// Modal that displays other classes with the same type and location
// If there are no other classes with same type and location, display: "Sorry there are no other times this class is available."
// Makes put request to class endpoint
import React, { useState, useEffect } from 'react';

// import axiosWithAuth from './../utils/axiosWithAuth';

const mockData = [
    {
        id: 5,
        name: 'Sweat', 
        time: '7am', 
        date: 'June 30',
        duration: '1 hour', 
        type: 'HIIT', 
        intensity: 3, 
        location: '114 Thompson St', 
        current_attendees: 19, 
        class_size: 25
    },
    {
        id: 6,
        name: 'Run run', 
        time: '9am', 
        date: 'July 3',
        duration: '30 mins', 
        type: 'HIIT', 
        intensity: 2, 
        location: '452 Broad St', 
        current_attendees: 7, 
        class_size: 25
    }
]

const ClassOption = (props) => {

    const { name, time, date, duration, type, intensity, location, current_attendees, class_size } = props.newClassInfo;
    const { classInfo, setIsModal, setModalInfo, clientItems, setClientItems } = props;

    // [...clientItems.classes.filter(el => el.id !== classInfo.id), props.newClassInfo]

    const handleRescheduleSubmit = () => {
        //delete the first reservation and add the new reservation to the client class list
        setIsModal(false);
        setClientItems({
            classes: [...clientItems.classes.filter(el => el.id !== classInfo.id), props.newClassInfo],
            punchpasses: [...clientItems.punchpasses]
        })
        // axiosWithAuth()
        //     .delete(`/api/delete/client-class/${classInfo.id}`)
        //     .then(res => {
        //         setIsModal(false);
        //         setClientItems({
        //             classes: [...clientItems.classes.filter(el => el.id !== classInfo.id), props.newClassInfo],
        //             punchpasses: [...clientItems.punchpasses]
        //         })
        //     })
        //     .catch(err => {
        //         console.log(err);
        //     })
    }

    const handleClassClick = () => {
        //show a new confirmation modal -- Are you sure you want to reschedule? This will remove you from the class in which you are currently registered and register you for this new class.
        setIsModal(true);
        setModalInfo({
            type: 'confirm',
            message: 'Are you sure you want to reschedule? This will remove you from the class in which you are currently signed up and sign you up for this new class.',
            function: handleRescheduleSubmit
        })
    }

    return (
        <tr className='table-data-row' id='reschedule-class' onClick={handleClassClick}>
            <td>{name}</td>
            <td>{time}</td>
            <td>{date}</td>
            <td>{duration}</td>
            <td>{type}</td>
            <td>{intensity}</td>
            <td>{location}</td>
            <td>{current_attendees}</td>
            <td>{class_size}</td>
        </tr>
    )
}

const RescheduleClass = (props) => {

    const { setIsModal, setModalInfo, classInfo, clientItems, setClientItems } = props;

    const [classOptions, setClassOptions] = useState([]);

    const getData = () => {
        setClassOptions(mockData);
        // axiosWithAuth()
        //     .get('/api/search-classes')
        //     .then(res => {
        //         setClassOptions(res.data);
        //     })
        //     .catch(err => {
        //         console.log(err);
        //     })
    }

    useEffect(() => {
        getData();
    }, []);

    return (
        <div>
            <h3>Select one of the classes below.</h3>
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
                {classOptions.map(el => (
                    <ClassOption 
                        key={el.id}
                        newClassInfo={el} 
                        classInfo={classInfo}
                        setIsModal={setIsModal}
                        setModalInfo={setModalInfo}
                        clientItems={clientItems}
                        setClientItems={setClientItems}
                    />
                ))}
                </tbody>
            </table>
        </div>
    )
};

export default RescheduleClass;