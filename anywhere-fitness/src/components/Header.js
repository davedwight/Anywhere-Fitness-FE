// Has logo and name of application
// Has nav bar that links to My Profile, Classes, and Punchpasses
// Has logout button that logs out a user (removes token and pushes to Login)
import React from 'react';
import { Link } from 'react-router-dom';

const Header = (props) => {
    return(
        <div className='container' id='header'>
            <h1>Anywhere Fitness</h1>
            <div className='nav'>
                {props.isAuth ? <Link to='/profile'>Profile</Link> : <div></div>}
                {props.isAuth ? <Link to='/login' onClick={props.handleLogout}>Logout</Link>: <div></div>}
            </div>
        </div>
    )
}

export default Header;