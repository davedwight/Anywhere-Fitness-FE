import React from 'react';

const Modal = (props) => {

    if (props.typeModal === 'cancelClass') {
        return (
            <div className='modal'>
                <p>Are you sure you want to cancel this class? This can't be undone.</p>
                <button onClick={props.handleClassCancelNo}>Nevermind</button>
                <button onClick={props.handleClassCancelYes}>Confirm</button>
            </div>
        )
    } else if (props.typeModal === 'rescheduleClass') {
        return (
            <div>
                <p>Please select a class from the options below.</p>
                <button onClick={props.handleClassRescheduleNo}>Nevermind</button>
                <button onClick={props.handleClassRescheduleYes}>Confirm</button>
            </div>
        )
    } else {
        <div>
            <p>Are you sure you want to remove this punchpass? This can't be undone and you will lose any remaining punches on this pass.</p>
            <button onClick={props.handlePunchpassCancelNo}>Nevermind</button>
            <button onClick={props.handlePunchpassCancelYes}>Confirm</button>
        </div>
    }
    
}

export default Modal;