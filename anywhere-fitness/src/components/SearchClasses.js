// List of available classes
// Can search by class time, date, duration, type, intensity level, location
// Can click button on individual class to register
// Clicking button renders confirmation modal
import React, { useEffect } from 'react';
// import axiosWithAuth from '../utils/axiosWithAuth';

import SearchClass from './SearchClass';

const mockGetClientClassSearch = [
    {
        id: 3,
        name: 'Run fast',
        time: '2pm',
        date: 'June 28',
        duration: '2 hrs',
        type: 'cardio',
        intensity: 'medium',
        location: 'football stadium',
        current_attendees: 14,
        class_size: 20
    },
    {
        id: 4,
        name: 'Run fast',
        time: '4pm',
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

    const { setIsModal, setModalInfo, clientClassSearch, setClientClassSearch, clientItems, setClientItems } = props;

    const getData = () => {
        console.log('Inside SearchClasses getData');
        setClientClassSearch(mockGetClientClassSearch);
        // axiosWithAuth()
        //     .get('/api/search-classes')
        //     .then(res => {
        //         setClientClassSearch(res.data);
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
                {clientClassSearch.map(el => (
                    <SearchClass 
                        key={el.id} 
                        info={el} 
                        setClientClassSearch={setClientClassSearch} 
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
}

export default SearchClasses;