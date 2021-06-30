import React from 'react';

import './../styles/Modal.css';

const Modal = (props) => {

    if (props.modalInfo.type === 'success') {
        return (
            <div className='modal-container' onClick={props.handleModalCancel}>
                <div className='modal'>
                    <p>{props.modalInfo.message ? props.modalInfo.message : 'Success'}</p>
                    <button onClick={props.handleModalCancel}>Ok</button>
                </div>
            </div>
        ) 
    } else if (props.modalInfo.type === 'confirm') {
        return (
            <div className='modal-container' onClick={props.handleModalCancel}>
                <div className='modal'>
                    <p>{props.modalInfo.message ? props.modalInfo.message : 'Are you sure?'}</p>
                    <button onClick={props.handleModalCancel}>Nevermind</button>
                    <button onClick={props.modalInfo.function}>Confirm</button>
                </div>
            </div>
        ) 
    } else {
        return (
            <div className='modal-container'>
                <div className='modal'>
                    <p>There was an error</p>
                    <button onClick={props.handleModalCancel}>Ok</button>
                </div>
            </div>
        )
    }





    // if (props.typeModal === 'cancelClass') {
    //     return (
    //         <div className='modal-container'>
    //             <div className='modal'>
    //                 <p>Are you sure you want to cancel this class? This can't be undone.</p>
    //                 <button onClick={props.handleModalCancel}>Nevermind</button>
    //                 <button onClick={props.handleClassCancel}>Confirm</button>
    //             </div>
    //         </div>
    //     )
    // } else if (props.typeModal === 'rescheduleClass') {
    //     return (
    //         <div className='modal-container'>
    //             <div className='modal'>
    //                 <p>Please select a class from the options below.</p>
    //                 <button onClick={props.handleModalCancel}>Nevermind</button>
    //                 <button onClick={props.handleClassReschedule}>Confirm</button>
    //             </div>
    //         </div>
    //     )
    // } else if (props.typeModal === 'cancelPunchpass') {
    //     return (
    //         <div className='modal-container'>
    //             <div className='modal'>
    //                 <p>Are you sure you want to remove this punchpass? This can't be undone and you will lose any remaining punches on this pass.</p>
    //                 <button onClick={props.handleModalCancel}>Nevermind</button>
    //                 <button onClick={props.handlePunchpassCancel}>Confirm</button>
    //             </div>
    //         </div>
    //     )
    // } else if (props.typeModal === 'success') {
    //     return (
    //         <div className='modal-container'>
    //             <div className='modal'>
    //                 <p>Success</p>
    //                 <button onClick={props.handleModalCancel}>Ok</button>
    //             </div>
    //         </div>
    //     )
    // } else if (props.typeModal === 'signUpClass') {
    //     return (
    //         <div className='modal-container'>
    //             <div className='modal'>
    //                 <p>You've successfully signed up for this class. You can reschedule or remove this class in your profile.</p>
    //                 <button onClick={props.handleModalCancel}>Ok</button>
    //             </div>
    //         </div>
    //     )
    // } else {
    //     return (
    //         <div className='modal-container'>
    //             <div className='modal'>
    //                 <p>There was an error</p>
    //                 <button onClick={props.handleModalCancel}>Ok</button>
    //             </div>
    //         </div>
    //     )
    // }
    
    
    
}

export default Modal;