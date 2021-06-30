// For clients --
// Displays type, punches used, punches available
// If viewed in SearchPunchpasses, has buy button and price
// Buy button renders BuyPunchpass modal

// For instructors --
// Displays type, punches, price, quantity
// Edit button that renders EditPunchpass
import React from 'react';

const SearchPunchpass = (props) => {

    const { setIsModal, setTypeModal } = props;
    const { type, punches_used, punches_available } = props.info;

    const handleAddPass = () => {
        setIsModal(true);
        setTypeModal('cancelPunchpass');
    }

    return (
        <tr className='table-data-row' id='punchpass'>
            <td>{type}</td>
            <td>{punches_used}</td>
            <td>{punches_available}</td>
            <td><button onClick={handleAddPass}>Remove pass</button></td>
        </tr>
    )
}

export default SearchPunchpass;