import React from 'react';

import './../styles/Modal.css';

const Modal = (props) => {

    if (props.modalInfo.type === 'success') {
        return (
            <div className='modal-container' onClick={props.handleModalCancel}>
                <div className='modal'>
                    <div>{props.modalInfo.message ? props.modalInfo.message : 'Success'}</div>
                    <button onClick={props.handleModalCancel}>Ok</button>
                </div>
            </div>
        ) 
    } else if (props.modalInfo.type === 'confirm') {
        return (
            <div className='modal-container' onClick={props.handleModalCancel}>
                <div className='modal'>
                    <div>{props.modalInfo.message ? props.modalInfo.message : 'Are you sure?'}</div>
                    <button onClick={props.handleModalCancel}>Nevermind</button>
                    <button onClick={props.modalInfo.function}>Confirm</button>
                </div>
            </div>
        ) 
    } else {
        return (
            <div className='modal-container'>
                <div className='modal'>
                    <div>There was an error</div>
                    <button onClick={props.handleModalCancel}>Ok</button>
                </div>
            </div>
        )
    }





    // if (props.typeModal === 'cancelClass') {
    //     return (
    //         <div className='modal-container'>
    //             <div className='modal'>
    //                 <div>Are you sure you want to cancel this class? This can't be undone.</div>
    //                 <button onClick={props.handleModalCancel}>Nevermind</button>
    //                 <button onClick={props.handleClassCancel}>Confirm</button>
    //             </div>
    //         </div>
    //     )
    // } else if (props.typeModal === 'rescheduleClass') {
    //     return (
    //         <div className='modal-container'>
    //             <div className='modal'>
    //                 <div>Please select a class from the options below.</div>
    //                 <button onClick={props.handleModalCancel}>Nevermind</button>
    //                 <button onClick={props.handleClassReschedule}>Confirm</button>
    //             </div>
    //         </div>
    //     )
    // } else if (props.typeModal === 'cancelPunchpass') {
    //     return (
    //         <div className='modal-container'>
    //             <div className='modal'>
    //                 <div>Are you sure you want to remove this punchpass? This can't be undone and you will lose any remaining punches on this pass.</div>
    //                 <button onClick={props.handleModalCancel}>Nevermind</button>
    //                 <button onClick={props.handlePunchpassCancel}>Confirm</button>
    //             </div>
    //         </div>
    //     )
    // } else if (props.typeModal === 'success') {
    //     return (
    //         <div className='modal-container'>
    //             <div className='modal'>
    //                 <div>Success</div>
    //                 <button onClick={props.handleModalCancel}>Ok</button>
    //             </div>
    //         </div>
    //     )
    // } else if (props.typeModal === 'signUpClass') {
    //     return (
    //         <div className='modal-container'>
    //             <div className='modal'>
    //                 <div>You've successfully signed up for this class. You can reschedule or remove this class in your profile.</div>
    //                 <button onClick={props.handleModalCancel}>Ok</button>
    //             </div>
    //         </div>
    //     )
    // } else {
    //     return (
    //         <div className='modal-container'>
    //             <div className='modal'>
    //                 <div>There was an error</div>
    //                 <button onClick={props.handleModalCancel}>Ok</button>
    //             </div>
    //         </div>
    //     )
    // }
    
    
    
}

export default Modal;