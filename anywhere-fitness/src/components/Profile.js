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

import Class from './Class';

const initialValue = {
    classes: [],
    punchpasses: []
};

const Profile = () => {

    const [state, setState] = useState(initialValue)
    
    const getData = () => {
        console.log("Data received");
        // axiosWithAuth()
        //     .get('api/classes')
        //     .then(res => {
        //         setState({
        //             classes: res.data 
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

            <div id='class-container'>
            {
                state.classes.map(c => (
                    <Class key={c.id} info={c}/>
                ))
            }   
            </div>
            <button>Find a class</button>

            <h3>Your Punchpasses</h3>
            <div id='punchpass-container'>
            {
                state.punchpasses.map(p => (
                    <Class key={p.id} info={p}/>
                ))
            }   
            </div>
            <button>Find a punchpass</button>

        </div>
    )
}

export default Profile;