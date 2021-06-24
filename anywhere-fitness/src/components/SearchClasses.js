// List of available classes
// Can search by class time, date, duration, type, intensity level, location
// Can click button on individual class to register
// Clicking button renders confirmation modal
import React, { useState, useEffect } from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';

import Class from './Class';

const initialValues = [
    {
        name: 'Run fast',
        date: 'June 28',
        duration: '2 hrs',
        type: 'cardio',
        intensity: 'medium',
        location: 'football stadium',
        current_attendees: 14,
        class_size: 20
    },
    {
        name: 'Run fast',
        date: 'June 28',
        duration: '2 hrs',
        type: 'cardio',
        intensity: 'medium',
        location: 'football stadium',
        current_attendees: 14,
        class_size: 20
    }
]

const SearchClasses = (props) => {

    const [classes, setClasses] = useState(initialValues);

    const getData = () => {
        console.log('Search class data');
        // axiosWithAuth()
        //     .get('/api/search-classes')
        //     .then(res => {
        //         setClasses(res.data);
        //     })
        //     .catch(err => {
        //         console.log(err);
        //     })
    }

    useEffect(() => {
        getData();
    }, []);

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
                    <Class key={c.id} info={c}/>
                ))}
                </tbody>
            </table>
        </div>
    )
}

export default SearchClasses;