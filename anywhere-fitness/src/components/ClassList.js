// Nested inside Profile
// Displays a list of Class components
import React from 'react';

import Class from './Class';

const ClassList = (props) => {
    return (
        <div className='container'>
            {props.classes.map(c => (
                <Class key={c.id} info={c}/>
            ))}
        </div>
    )
}

export default ClassList;