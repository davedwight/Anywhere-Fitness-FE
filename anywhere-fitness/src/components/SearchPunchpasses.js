// Displays list of punchpasses for sale
// Can search by type, instructor, price
// Buy button on individual Punchpass that renders BuyPunchpass component


// List of available classes
// Can search by class time, date, duration, type, intensity level, location
// Can click button on individual class to register
// Clicking button renders confirmation modal
import React, { useEffect } from 'react';
// import axiosWithAuth from '../utils/axiosWithAuth';

import SearchPunchpass from './SearchPunchpass';

const mockGetClientPunchpassSearch = [
    {
        id: 1,
        type: 'cardio', 
        punches_used: 6, 
        punches_available: 10
    },
    {
        id: 2,
        type: 'cardio', 
        punches_used: 6, 
        punches_available: 10
    }
]

const SearchPunchpasses = (props) => {

    const { setIsModal, setTypeModal, clientPunchpassSearch, setClientPunchpassSearch } = props;

    const getData = () => {
        console.log('Inside SearchPunchpasses getData');
        setClientPunchpassSearch(mockGetClientPunchpassSearch);
        // axiosWithAuth()
        //     .get('/api/search-punchpasses')
        //     .then(res => {
        //         setClientPunchpassSearch(res.data);
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
                {clientPunchpassSearch.map(el => (
                    <SearchPunchpass 
                        key={el.id} 
                        info={el} 
                        setIsModal={setIsModal} 
                        setTypeModal={setTypeModal} 
                    />
                ))}
                </tbody>
            </table>
        </div>
    )
}

export default SearchPunchpasses;