// For clients --
// Shows classes with ability to reschedule and delete individual classes. Reschedule button renders RescheduleClass modal
// Button to redirect to search classes page
// Shows punchpasses
// Button to redirect to search punchpasses page

// For instructors --
// Shows classes with ability to edit and delete individual classes. Edit renders EditClass modal
// Button to create class, which renders CreateClass modal
// Shows punchpasses with ability to edit and delete. Edit renders EditPunchpass modal
// Button to create punchpass, which renders CreatePunchpass modal

import React, { useEffect } from "react";
// import axiosWithAuth from './../utils/axiosWithAuth';

import ClassList from "./ClassList";
import PunchpassList from "./PunchpassList";

const Profile = (props) => {
    const { setIsModal, setModalInfo, clientItems, setClientItems } = props;

    const getData = () => {
        console.log("Inside Profile getData");
        setClientItems(clientItems);
        // axiosWithAuth()
        //     .get('/api/client-items')
        //     .then(res => {
        //         setClientItems(res.data);
        //     })
        //     .catch(err => {
        //         console.log(err);
        //     })
    };

    useEffect(() => {
        getData();
    }, [clientItems]); // eslint-disable-line

    return (
        <section>
            <div className="container">

                <h3>Your Classes</h3>

                <ClassList
                    classes={clientItems.classes}
                    setIsModal={setIsModal}
                    setModalInfo={setModalInfo}
                    clientItems={clientItems}
                    setClientItems={setClientItems}
                />

                <h3>Your Punchpasses</h3>

                <PunchpassList
                    punchpasses={clientItems.punchpasses}
                    setIsModal={setIsModal}
                    setModalInfo={setModalInfo}
                    clientItems={clientItems}
                    setClientItems={setClientItems}
                />
            </div>
        </section>
    );
};

export default Profile;
