// Login form that accepts username and password
// Posts credentials to the login endpoint
// Should be able to select option to login as a client or as an instructor
// On success, pushes to Profile page

import React, { useState } from 'react';
import axiosWithAuth from './../utils/axiosWithAuth';

const initialValues = {
    name: '',
    credentials: {
        username: '',
        password: ''
    }
}

const Login = () => {

    const [state, setState] = useState(initialValues)
    console.log(state);

    const handleChange = e => {
        setState({
            ...state,
            [e.target.name]: e.target.value,
            credentials: {
                ...state.credentials,
                [e.target.name]: e.target.value
            }
        })
    }

    const handleSubmit = e => {
        e.preventDefault(e)
        console.log("Submitted");

        axiosWithAuth()
            .post('http://localhost:5000/api/login', state.credentials)
            .then(res => {
            localStorage.setItem("token", res.data.payload);
            this.props.history.push('/protected');
            })
            .catch(err => {
                console.log(err);
            })
    }

    return (
        <div>
            <h2>Form component</h2>
            <form onSubmit={handleSubmit}>
                 <label>Name:
                    <input
                        type='text'
                        name='name'
                        value={state.name}
                        onChange={handleChange}
                    />
                </label>
                <label>Username:
                    <input
                        type='text'
                        name='username'
                        value={state.credentials.username}
                        onChange={handleChange}
                    />
                </label>
                <label>Password: 
                    <input
                        type='password'
                        name='password'
                        value={state.credentials.password}
                        onChange={handleChange}
                    />
                </label>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default Login;