// Login form that accepts username and password
// Posts credentials to the login endpoint
// Should be able to select option to login as a client or as an instructor
// On success, pushes to Profile page

import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./../styles/Login.css";

// import axiosWithAuth from './../utils/axiosWithAuth';

const initialValues = {
    name: "",
    credentials: {
        username: "",
        password: "",
    },
};

const Login = (props) => {
    const [state, setState] = useState(initialValues);
    console.log(state);

    const history = useHistory();

    const handleChange = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value,
            credentials: {
                ...state.credentials,
                [e.target.name]: e.target.value,
            },
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault(e);
        console.log("Submitted");

        // delete this and uncomment below when endpoint is setup
        history.push("/profile");
        props.setAuth({
            isAuth: true,
        });

        // axiosWithAuth()
        //     .post('http://localhost:5000/api/login', state.credentials)
        //     .then(res => {
        //     localStorage.setItem("token", res.data.payload);
        //     history.push('/profile');
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
            <div className="login-container">
                <h2>Login</h2>
                <form className="login-form" onSubmit={handleSubmit}>
                    {/* <label>
                        <input
                            type="text"
                            name="name"
                            value={state.name}
                            onChange={handleChange}
                            placeholder="Name"
                        />
                    </label> */}
                    <label>
                        <input
                            type="text"
                            name="username"
                            value={state.credentials.username}
                            onChange={handleChange}
                            placeholder="Username"
                        />
                    </label>
                    <label>
                        <input
                            type="password"
                            name="password"
                            value={state.credentials.password}
                            onChange={handleChange}
                            placeholder="Password"
                        />
                    </label>
                    <button className="submit-button">Submit</button>
                </form>
            </div>
        </section>
    );
};

export default Login;
