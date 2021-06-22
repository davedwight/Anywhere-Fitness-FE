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
            {props.punchpasses.map(p => (
                <Punchpass key={p.id} info={p}/>
            ))}
        </div>
    )
}

export default PunchpassList;