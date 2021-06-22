// Shows a user how to use the application
// Renders conditional info depending on if the user is a client or instructor
import React from 'react';

const Onboarding = (props) => {
    return (
        <div>
            <h2>Welcome, {props.name}! Here's how to use this app.</h2>
            <p>First</p>
        </div>
    )
};

export default Onboarding;