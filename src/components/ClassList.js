// Nested inside Profile
// Displays a list of Class components
import React from "react";

import Class from "./Class";
import "./../styles/ClassList.css";

const ClassList = (props) => {
    const { classes, setIsModal, setModalInfo, clientItems, setClientItems } =
        props;

    return (
        <section className="container">
            <table>
                <tbody>
                    <tr className="table-header-row">
                        <th>Name</th>
                        <th>Time</th>
                        <th>Date</th>
                        <th>Duration</th>
                        <th>Type</th>
                        <th>Intensity</th>
                        <th>Availability</th>
                    </tr>
                    {classes.map((el) => (
                        <Class
                            key={el.id}
                            info={el}
                            setIsModal={setIsModal}
                            setModalInfo={setModalInfo}
                            clientItems={clientItems}
                            setClientItems={setClientItems}
                        />
                    ))}
                </tbody>
            </table>
        </section>
    );
};

export default ClassList;
