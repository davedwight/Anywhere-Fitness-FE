// Shows a user how to use the application
// Renders conditional info depending on if the user is a client or instructor
import React from "react";
import { useHistory } from "react-router-dom";

const Onboarding = (props) => {
    const history = useHistory();

    const handleClick = () => {
        history.push("/profile");
    };

    return (
        <section>
            <div className="container">
                <h2>Welcome, {props.name}! Here's how to use this app.</h2>
                <p>First, purchase punchpasses to use on any classes. <br></br><br></br>Second, sign up for any class. <br></br><br></br>Third, get details sent to your email. <br></br><br></br>Finally, get to it!</p>
                <button onClick={handleClick}>Done</button>
            </div>
        </section>
    );
};

export default Onboarding;
