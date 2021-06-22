// For clients --
// Displays type, punches used, punches available
// If viewed in SearchPunchpasses, has buy button and price
// Buy button renders BuyPunchpass modal

// For instructors --
// Displays type, punches, price, quantity
// Edit button that renders EditPunchpass
import React from 'react';

const Punchpass = (props) => {

    const { type, punches_used, punches_available } = props.info;
    return (
        <div id='class'>
            <p>{type}</p>
            <p>{punches_used}</p>
            <p>{punches_available}</p>
        </div>
    )
}

export default Punchpass;