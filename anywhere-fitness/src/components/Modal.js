import React from 'react';

const Modal = (props) => {

    if (props.typeModal === 'cancelClass') {
        return (
            <div className='modal'>
                <p>Are you sure you want to cancel this class? This can't be undone.</p>
                <button onClick={props.handleModalCancel}>Nevermind</button>
                <button onClick={props.handleClassCancel}>Confirm</button>
            </div>
        )
    } else if (props.typeModal === 'rescheduleClass') {
        return (
            <div className='modal'>
                <p>Please select a class from the options below.</p>
                <button onClick={props.handleModalCancel}>Nevermind</button>
                <button onClick={props.handleClassReschedule}>Confirm</button>
            </div>
        )
    } else if (props.typeModal === 'cancelPunchpass') {
        <div>
            <p>Are you sure you want to remove this punchpass? This can't be undone and you will lose any remaining punches on this pass.</p>
            <button onClick={props.handleModalCancel}>Nevermind</button>
            <button onClick={props.handlePunchpassCancel}>Confirm</button>
        </div>
    } else if (props.typeModal === 'success') {
        <div className='modal'>
            <p>Success</p>
            <button onClick={props.handleModalCancel}>Ok</button>
        </div>
    } else {
        <div className='modal'>
            <p>There was an error</p>
            <button onClick={props.handleModalCancel}>Ok</button>
        </div>
    }
    
    
    
}

export default Modal;