// For clients -- 
// Shows classes with ability to reschedule and delete individual classes. Reschedule button renders RescheduleClass modal
// Button to redirect to search classes page
// Shows punchpasses 
// Button to redirect to search punchpasses page

// For instructors --
// Shows classes with ability to edit and delete individual classes. Edit renders EditClass modal
// Button to create class, which renders CreateClass modal
// Shows punchpasses with ability to edit and delete. Edit renders EditPunchpass modal
// Button to create punchpass, which renders CreatePunchpass modal

import React, { useState, useEffect } from 'react';
import axiosWithAuth from './../utils/axiosWithAuth';

import ClassList from './ClassList';
import PunchpassList from './PunchpassList';

const initialValue = {
    classes: [
        {
            id: 1,
            name: 'Sweat', 
            time: '1pm', 
            date: 'June 24',
            duration: '1 hour', 
            type: 'HIIT', 
            intensity: 3, 
            location: '114 Thompson St', 
            current_attendees: 13, 
            class_size: 25
        },
        {
            id: 2,
            name: 'Run run', 
            time: '3pm', 
            date: 'June 30',
            duration: '30 mins', 
            type: 'Cardio', 
            intensity: 2, 
            location: '452 Broad St', 
            current_attendees: 22, 
            class_size: 25
        }
    ],
    punchpasses: [
        {
            id: 1,
            type: 'boxing', 
            punches_used: 5,
            punches_available: 10
        },
        {
            id: 2,
            type: 'HIIT', 
            punches_used: 7,
            punches_available: 15
        }
    ]
};

const Profile = (props) => {

    const [data, setData] = useState(initialValue);
    // const [isModal, setIsModal] = useState(false);
    // const [typeModal, setTypeModal] = useState('');

    const { setIsModal, setTypeModal } = props;
    
    const getData = () => {
        console.log("Data received");
        // axiosWithAuth()
        //     .get('api/classes')
        //     .then(res => {
        //         setData({
                //     classes: res.data.classes,
                //     punchpasses: res.data.punchpasses
                       
        //         })
        //     })
        //     .catch(err => {
        //         console.log(err);
        //     })
    }

    useEffect(() => {
        getData();
    }, [])

    return ( 
        <div className='container'>

            <h2>Profile page</h2>

            <h3>Your Classes</h3>
            <div id='class-list-container'>
                <ClassList classes={data.classes} setTypeModal={setTypeModal} setIsModal={setIsModal} />
            </div>
            
            <h3>Your Punchpasses</h3>
            <div id='punchpass-list-container'>
                <PunchpassList punchpasses={data.punchpasses} setTypeModal={setTypeModal} setIsModal={setIsModal} />
            </div>

        </div>
    )
}

export default Profile;