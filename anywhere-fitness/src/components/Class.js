// For clients --
// Displays name, time, date, duration, type, intensity, location
// Has reschedule button that renders RescheduleClass
// Has delete button

// For instructors --
// Displays name, time, date, duration, type, intensity, location, current registered attendees, max class size
// Has edit button that renders EditClass
// Has delete button
import React from 'react';

const Class = (props) => {

    const { name, time, date, duration, type, intensity, location, current_attendees, class_size } = props.info;
    return (
        <div id='class'>
            <p>{name}</p>
            <p>{time}</p>
            <p>{date}</p>
            <p>{duration}</p>
            <p>{type}</p>
            <p>{intensity}</p>
            <p>{location}</p>
            <p>{current_attendees}</p>
            <p>{class_size}</p>
        </div>
    )
}

export default Class;