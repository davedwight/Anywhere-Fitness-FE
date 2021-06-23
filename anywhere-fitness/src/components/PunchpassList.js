// For clients --
// Shows list of punchpasses that the user has purchased
// Maps through Punchpass components

// For instructors -- 
// Shows list of punchpasses that the instructor is selling
// Maps through Punchpass components
import React from 'react';

import Punchpass from './Punchpass';

const PunchpassList = (props) => {
    return (
        <div className='container'>
            <table>
                <tbody>
                <tr className='table-header-row'>
                    <th>Type</th>
                    <th>Used punches</th>
                    <th>Total punches</th>
                </tr>
                {props.punchpasses.map(p => (
                    <Punchpass key={p.id} info={p}/>
                ))}
                </tbody>
            </table>
        </div>
    )
}

export default PunchpassList;