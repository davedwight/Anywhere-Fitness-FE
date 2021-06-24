// Displays list of punchpasses for sale
// Can search by type, instructor, price
// Buy button on individual Punchpass that renders BuyPunchpass component


// List of available classes
// Can search by class time, date, duration, type, intensity level, location
// Can click button on individual class to register
// Clicking button renders confirmation modal
import React, { useState, useEffect } from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';

import Punchpass from './Punchpass';

const initialValues = [
    {
        type: 'cardio', 
        punches_used: 6, 
        punches_available: 10
    },
    {
        type: 'cardio', 
        punches_used: 6, 
        punches_available: 10
    }
]

const SearchPunchpasses = (props) => {

    const [punchpasses, setPunchpasses] = useState(initialValues);

    const getData = () => {
        console.log('Search punchpass data');
        // axiosWithAuth()
        //     .get('/api/search-punchpasses')
        //     .then(res => {
        //         setPunchpasses(res.data);
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
                    <th>Type</th>
                    <th>Used punches</th>
                    <th>Total punches</th>
                </tr>
                {punchpasses.map(p => (
                    <Punchpass key={p.id} info={p} />
                ))}
                </tbody>
            </table>
        </div>
    )
}

export default SearchPunchpasses;