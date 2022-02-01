// Option to signup as a client or an instructor
// Form that accepts name, username, password
// Posts new user to add user endpoint
// On success, pushes to Onboarding

import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./../styles/Signup.css";

// import axiosWithAuth from './../utils/axiosWithAuth';

const initialValues = {
    name: "",
    email: "",
    username: "",
    password: "",
    password2: "",
};

const SignUp = (props) => {
    const [state, setState] = useState(initialValues);
    console.log(state);

    const history = useHistory();

    const handleChange = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault(e);
        console.log("Submitted");

        // delete this and uncomment below when endpoint is setup
        history.push("/onboarding");
        props.setAuth({
            isAuth: true,
        });

        // axiosWithAuth()
        //     .post('http://localhost:5000/api/signup', data)
        //     .then(res => {
        //     localStorage.setItem("token", res.data.payload);
        //     history.push('/onboarding');
        //     props.setAuth({
        //         isAuth: true
        //     })
        //     })
        //     .catch(err => {
        //         console.log(err);
        //     })
    };

    return (
        <section>
            <div className="signup-container">
                <h2>Sign Up</h2>
                <form onSubmit={handleSubmit}>
                    <label>
                        <input
                            type="text"
                            name="name"
                            value={state.name}
                            onChange={handleChange}
                            placeholder="Name"
                        />
                    </label>
                    <label>
                        <input
                            type="email"
                            name="email"
                            value={state.email}
                            onChange={handleChange}
                            placeholder="Email"
                        />
                    </label>
                    <label>
                        <input
                            type="text"
                            name="username"
                            value={state.username}
                            onChange={handleChange}
                            placeholder="Username"
                        />
                    </label>
                    <label>
                        <input
                            type="password"
                            name="password"
                            value={state.password}
                            onChange={handleChange}
                            placeholder="Password"
                        />
                    </label>
                    <label>
                        <input
                            type="password"
                            name="password2"
                            value={state.password2}
                            onChange={handleChange}
                            placeholder="Repeat password"
                        />
                    </label>
                    <button className="submit-button">Submit</button>
                </form>
            </div>
        </section>
    );
};

export default SignUp;
